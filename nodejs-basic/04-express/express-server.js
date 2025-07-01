const express = require('express');

// Create an Express application
const app = express();
const PORT = 3000;

// Middleware to log request details
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const headers = req.headers;

    console.log(`Request URL: ${url}`);
    console.log(`Request Method: ${method}`);
    console.log(`Request Headers: ${JSON.stringify(headers)}`);
    console.log('-----------------------------------');
    next(); // Call the next middleware
});

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page by Express!');
});
app.get('/about', (req, res) => {
    res.send('About Us: We are dedicated to providing the best service.');
});
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// To test the server, open your browser and navigate to:
// http://localhost:3000/