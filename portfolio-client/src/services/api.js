import profileData from "../data/profile.json";
import projectsData from "../data/projects.json";
import seedContactMessages from "../data/contact-messages.json";

const CONTACT_STORAGE_KEY = "portfolio_contact_messages";

// Keep API signatures async so existing pages continue to work unchanged.
export async function getProfile() {
  return profileData;
}

export async function getProjects() {
  return projectsData;
}

function readStoredMessages() {
  try {
    const raw = localStorage.getItem(CONTACT_STORAGE_KEY);
    if (!raw) {
      return seedContactMessages;
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : seedContactMessages;
  } catch {
    return seedContactMessages;
  }
}

function writeStoredMessages(messages) {
  localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(messages));
}

export async function sendContactMessage(data) {
  const message = {
    id: `msg_${Date.now()}`,
    name: String(data?.name || "").trim(),
    email: String(data?.email || "").trim().toLowerCase(),
    message: String(data?.message || "").trim(),
    submittedAt: new Date().toISOString()
  };

  const existingMessages = readStoredMessages();
  writeStoredMessages([message, ...existingMessages]);

  return {
    success: true,
    message: "Thank you! Your message has been received. I'll get back to you soon."
  };
}