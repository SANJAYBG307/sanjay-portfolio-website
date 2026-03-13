const express = require("express");
const router = express.Router();

// Load project data
const projects = require("../data/projects.json");

// GET /api/projects
router.get("/", (req, res) => {
  res.json(projects);
});

module.exports = router;