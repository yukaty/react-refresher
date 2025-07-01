// Get environment variables
const port = process.env.PORT || 3000;

// Get database connection information
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

console.log(`Server will run on port: ${port}`);
console.log(`Database connection details: ${JSON.stringify(dbConfig, null, 2)}`);

// To run this script, you can use the following command:
// node --env-file=.env.dev env-demo.js