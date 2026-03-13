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