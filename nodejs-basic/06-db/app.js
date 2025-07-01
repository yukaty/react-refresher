// Import mysql2/promise for async/await support
const mysql = require("mysql2/promise");

// Async function to connect to the database
async function getUsers() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "nodejs_db",
      port: 8889 // Default MySQL port is 3306, but MAMP uses 8889
    });
    console.log("Connected to the database");
    const [rows] = await connection.execute("SELECT * FROM users;");
    console.log("Fetched users:", rows);
    return rows;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    if (connection) {
      await connection.end();
      console.log("Database connection closed");
    }
  }
}

// Fetch users from the database
getUsers();