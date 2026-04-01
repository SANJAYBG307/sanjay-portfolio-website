const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const messagesFilePath = path.join(__dirname, "../data/contact-messages.json");

// Rate limiting storage (in-memory, resets on server restart)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_HOUR = 5;

// Validation functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 100;
}

function sanitizeInput(input) {
  return String(input)
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML/script tags
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "");
}

function validateContactData(data) {
  const { name, email, message } = data;

  // Required fields check
  if (!name || !email || !message) {
    return {
      valid: false,
      error: "Name, email, and message are required."
    };
  }

  // Name validation
  const nameStr = String(name).trim();
  if (nameStr.length < 2 || nameStr.length > 100) {
    return {
      valid: false,
      error: "Name must be between 2 and 100 characters."
    };
  }

  // Email validation
  const emailStr = String(email).trim().toLowerCase();
  if (!isValidEmail(emailStr)) {
    return {
      valid: false,
      error: "Please provide a valid email address."
    };
  }

  // Message validation
  const messageStr = String(message).trim();
  if (messageStr.length < 10 || messageStr.length > 2000) {
    return {
      valid: false,
      error: "Message must be between 10 and 2000 characters."
    };
  }

  return { valid: true };
}

function checkRateLimit(ip) {
  const now = Date.now();
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
    return { allowed: true };
  }

  const { count, firstRequest } = rateLimitStore.get(ip);
  const timePassed = now - firstRequest;

  // Reset if window has passed
  if (timePassed > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
    return { allowed: true };
  }

  // Check if exceeded limit
  if (count >= MAX_REQUESTS_PER_HOUR) {
    return {
      allowed: false,
      error: `Too many requests. Please try again in ${Math.ceil((RATE_LIMIT_WINDOW - timePassed) / 60000)} minutes.`
    };
  }

  // Increment count
  rateLimitStore.set(ip, { count: count + 1, firstRequest });
  return { allowed: true };
}

function readMessages() {
  try {
    if (!fs.existsSync(messagesFilePath)) {
      return [];
    }

    const raw = fs.readFileSync(messagesFilePath, "utf8");
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeMessages(messages) {
  fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2), "utf8");
}

/*
POST /api/contact

Receives messages from the portfolio contact form with validation
*/
router.post("/", (req, res) => {
  const clientIP = req.ip || req.connection.remoteAddress;

  // Check rate limit
  const rateCheck = checkRateLimit(clientIP);
  if (!rateCheck.allowed) {
    return res.status(429).json({
      success: false,
      message: rateCheck.error
    });
  }

  const { name, email, message } = req.body;

  // Validate data
  const validation = validateContactData({ name, email, message });
  if (!validation.valid) {
    return res.status(400).json({
      success: false,
      message: validation.error
    });
  }

  // Sanitize inputs
  const newMessage = {
    id: `msg_${Date.now()}`,
    name: sanitizeInput(name),
    email: String(email).trim().toLowerCase(),
    message: sanitizeInput(message),
    submittedAt: new Date().toISOString()
  };

  try {
    const existingMessages = readMessages();
    existingMessages.unshift(newMessage);
    writeMessages(existingMessages);

    console.log("✓ New contact message received:");
    console.log("  Name:", newMessage.name);
    console.log("  Email:", newMessage.email);
    console.log("  Submitted At:", newMessage.submittedAt);

    res.json({
      success: true,
      message: "Thank you! Your message has been received. I'll get back to you soon."
    });

  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later."
    });
  }

});

/*
GET /api/contact/messages

Returns all received contact messages (latest first)
*/
router.get("/messages", (req, res) => {
  const messages = readMessages();
  res.json(messages);
});

module.exports = router;