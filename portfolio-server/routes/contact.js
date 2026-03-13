const express = require("express");

const router = express.Router();

/*
POST /api/contact

Receives messages from the portfolio contact form
*/
router.post("/", (req, res) => {

  const { name, email, message } = req.body;

  console.log("New contact message received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({
    success: true,
    message: "Message received successfully!"
  });

});

module.exports = router;