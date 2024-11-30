// Import Express and create a router
const express = require("express");
const router = express.Router();
const path = require("path");

// Define routes for your router
router.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/login.html"));
});

router.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/signup.html"));
});
router.get("/feedback", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/feedback.html"));
});
router.get("/todo", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/todo.html"));
});

// Export the router to use in your main Express app
module.exports = router;
