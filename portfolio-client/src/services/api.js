const API_BASE_URL = "http://localhost:5000/api";

// Fetch profile information
export async function getProfile() {
  const response = await fetch(`${API_BASE_URL}/profile`);
  return response.json();
}

// Fetch projects
export async function getProjects() {
  const response = await fetch(`${API_BASE_URL}/projects`);
  return response.json();
}

export async function sendContactMessage(data) {

  const response = await fetch("http://localhost:5000/api/contact", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(data)

  });

  return response.json();
}