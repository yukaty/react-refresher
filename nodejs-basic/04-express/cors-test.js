const cors = require('cors');
const express = require('express');
const app = express();

// CORS configuration
app.use(cors({
    origin: 'https://example.com', // domain to allow
    methods: ['GET', 'POST'],      // allowed HTTP methods
    credentials: true              // allow credentials
}));

// JSON body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample route
app.get('/cors-test', (req, res) => {
    res.send('Success!');
}
);

// Web server start
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
}
);
