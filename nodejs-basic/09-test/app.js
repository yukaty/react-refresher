const express = require("express");
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Login attempts counter
function canLogin(attempts) {
  // Return true if attempts are less than 5
  return attempts < 5 ? true : false;
}

// Login route
app.post("/login", (req, res) => {
  const { attempts } = req.body;

  // login attempts check
  if (canLogin(attempts)) {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res
      .status(403)
      .json({ message: "Your account is locked due to too many attempts." });
  }
});

// Export the app and canLogin function for testing
module.exports = { app, canLogin };
