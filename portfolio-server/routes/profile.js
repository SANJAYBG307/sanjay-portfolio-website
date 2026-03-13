const express = require("express");
const router = express.Router();

// Load profile data
const profile = require("../data/profile.json");

// GET /api/profile
router.get("/", (req, res) => {
  res.json(profile);
});

module.exports = router;