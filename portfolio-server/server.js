// Import required libraries
const express = require("express");
const cors = require("cors");

// Create Express app
const app = express();

// Allow frontend to communicate with backend
app.use(cors());

// Allow server to read JSON data
app.use(express.json());

// Define server port
const PORT = 5000;

/*
TEST API ROUTE

This route is only for testing if
the backend is running correctly.
*/
app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend server is working!"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});