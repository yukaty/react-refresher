const express = require('express');
const { parse } = require('path');

const app = express();

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});
// Get a user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// To test the server, use Postman or curl:
// GET http://localhost:3000/users
// GET http://localhost:3000/users/1