const mysql = require('mysql2/promise');

// DB configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 8889,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Async function to close the pool
async function closePool() {
  try {
    await pool.end();
    console.log('database connection pool closed');
  } catch (err) {
    console.error('Error closing the database connection pool:', err);
  }
}

// Async function to execute a query
async function executeQuery(sql, params = []) {
  try {
    const [rows] = await pool.execute(sql, params);
    return rows;
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error to be handled by the caller
  }
}

// Export the functions
module.exports = {
  closePool,
  executeQuery
};

