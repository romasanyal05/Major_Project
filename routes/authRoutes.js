const express = require("express");

const router = express.Router();

let users = [];

router.post("/register", (req, res) => {

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      error: "All fields are required"
    });
  }

  const existingUser = users.find(
    user => user.email === email
  );

  if (existingUser) {
    return res.status(400).json({
      error: "User already exists"
    });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password
  };

  users.push(newUser);

  res.json({
    success: true,
    message: "Registration successful",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    }
  });

});

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  const user = users.find(
    user =>
      user.email === email &&
      user.password === password
  );

  if (!user) {
    return res.status(400).json({
      error: "Invalid email or password"
    });
  }

  res.json({
    success: true,
    token: "demo-token",
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });

});

router.post("/forward-password", (req, res) => {

  const { email } = req.body;

  const user = users.find(
    user => user.email === email
  );

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  res.json({
    success: true,
    message: "Reset link sent successfully"
  });

});

module.exports = router;