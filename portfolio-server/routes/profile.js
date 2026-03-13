const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const profilePath = path.join(__dirname, "../data/profile.json");

// GET /api/profile
router.get("/", (req, res) => {
  try {
    const profile = JSON.parse(fs.readFileSync(profilePath, "utf8"));
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Unable to load profile data" });
  }
});

module.exports = router;