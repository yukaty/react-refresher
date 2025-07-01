const express = require("express");

const bcrypt = require("bcrypt");
const { executeQuery } = require("./db");
const jwt = require("./jwt");

// This router object can be used to define routes and middleware for handling HTTP requests
const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  // get username and password from request body
  const { username, password } = req.body;

  try {
    // hash the password using bcrypt
    const hashed = await bcrypt.hash(password, 10);

    // insert the new user into the database
    await executeQuery(
      "INSERT INTO auth_users (username, password) VALUES (?, ?);",
      [username, hashed]
    );

    // send a success response
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    // エラー処理
    if (err.code === "ER_DUP_ENTRY") {
      res.status(409).json({ error: "This username is already taken" });
    } else {
      res.status(500).json({ error: "Database error occurred" });
    }
  }
});

// Login a user
router.post("/login", async (req, res) => {
  // get username and password from request body
  const { username, password } = req.body;

  try {
    // Check if the user exists in the database
    // NOTE: If the data is obtained, rows is treated as an object instead of an array.
    const [rows] = await executeQuery(
      "SELECT * FROM auth_users WHERE username = ?;",
      [username]
    );

    // If the user does not exist, return an error
    if (!rows || !(await bcrypt.compare(password, rows.password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate a JWT token
    const token = jwt.generateToken({ id: rows.id, username: rows.username });

    // Set the token in a cookie
    res.cookie("authToken", token, {
      httpOnly: true,         // Not accessible to JavaScript (XSS attack prevention)
      secure: true,           // Only sent over HTTPS (MITM attack prevention)
      sameSite: "strict",     // Only sent to the same site (CSRF attack prevention)
      maxAge: 60 * 60 * 1000, // Expiration time (1 hour)
    });

    // Send a success response (token is set in the cookie)
    return res.status(200).json({ message: "Login successful" });

  } catch (err) {
    res.status(500).json({ error: "Database error occurred" });
  }
});

// Get user information
// NOTE: The token is verified in the middleware
router.get("/my-info", jwt.verifyToken, (req, res) => {
  // If the token is valid, req.user will contain the decoded token data
  res.json({ id: req.user.id, username: req.user.username });
});

module.exports = router;
