const express = require('express');
const router = express.Router();

// When someone POSTs to /api/login, run this function
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt:", email);

  // For now we don't have database, so we use sample user
  // Later we will check from MySQL
  const sampleUser = {
    email: "student@must.ac.ug",
    password: "12345",
    name: "MUST Student"
  };

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  if (email === sampleUser.email && password === sampleUser.password) {
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: { name: sampleUser.name, email: sampleUser.email }
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }
});

// Optional: test if route is working
router.get("/login", (req, res) => {
  res.json({ message: "Login route is working. Use POST to login." });
});

module.exports = router;