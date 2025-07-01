const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const headers = req.headers;

    console.log(`Request URL: ${url}`);
    console.log(`Request Method: ${method}`);
    console.log(`Request Headers: ${JSON.stringify(headers)}`);
    console.log('-----------------------------------');

    // Switch response based on the URL
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page!');
    }
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Us: We are dedicated to providing the best service.');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});
// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// To test the server, open your browser and navigate to:
// http://localhost:3000/