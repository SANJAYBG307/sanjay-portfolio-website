const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Import routes
const projectsRoute = require("./routes/projects");
const profileRoute = require("./routes/profile");

// Use routes
app.use("/api/projects", projectsRoute);
app.use("/api/profile", profileRoute);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend server working!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});