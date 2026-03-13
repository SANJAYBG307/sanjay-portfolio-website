const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const messagesFilePath = path.join(__dirname, "../data/contact-messages.json");

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

Receives messages from the portfolio contact form
*/
router.post("/", (req, res) => {

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required."
    });
  }

  const newMessage = {
    id: `msg_${Date.now()}`,
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    submittedAt: new Date().toISOString()
  };

  const existingMessages = readMessages();
  existingMessages.unshift(newMessage);
  writeMessages(existingMessages);

  console.log("New contact message received:");
  console.log("Name:", newMessage.name);
  console.log("Email:", newMessage.email);
  console.log("Message:", newMessage.message);
  console.log("Submitted At:", newMessage.submittedAt);

  res.json({
    success: true,
    message: "Message received successfully!"
  });

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