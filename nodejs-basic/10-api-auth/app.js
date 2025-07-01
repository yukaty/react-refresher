const express = require("express");
const app = express();

const cors = require("cors"); // middleware for CORS
const cookieParser = require("cookie-parser"); // parse cookies
const authRoutes = require("./auth"); // user authentication routes
const { closePool } = require("./db"); // close DB connection pool

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    methods: ["GET", "POST"], // methods allowed
    credentials: true, // allow credentials for cookies
  })
);

// parse incoming JSON requests
app.use(express.json());

// parse cookies from the request
app.use(cookieParser());

// user authentication routes
app.use(authRoutes);

// Close the database connection pool on process exit
["SIGINT", "SIGTERM", "SIGHUP"].forEach((signal) => {
  process.on(signal, async () => {
    console.log(`\n${signal} received. Closing database connection pool...`);
    await closePool();
    process.exit();
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
