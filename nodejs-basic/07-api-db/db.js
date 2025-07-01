const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nodejs_db',
  // port: 8889 // MAMP default port
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Close the connection pool
async function closePool() {
  try {
    await pool.end();
    console.log('Closed the database connection pool.');
  } catch (err) {
    console.error('Error closing the database connection pool:', err);
  }
}

// Execute a SQL query
async function executeQuery(sql, params = []) {
  try {
    const [rows] = await pool.execute(sql, params);
    return rows;
  } catch (err) {
    console.error(err);
    throw err; // Throw the error to be handled by the calling function
  }
}

// Export the functions
module.exports = {
  closePool,
  executeQuery
};

