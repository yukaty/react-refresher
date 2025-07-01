const express = require('express');
const app = express();
const PORT = 3000;

// Import database functions
const { executeQuery, closePool } = require('./db');

// Middlware to parse JSON request bodies
app.use(express.json());

// Error handling function
function handleServerError(res, error, message = 'Server error') {
  console.error(error);
  res.status(500).json({ error: message });
}

// Create user
app.post('/users', async (req, res) => {
  const { name, age } = req.body;
  try {
    const result = await executeQuery(
      'INSERT INTO users (name, age) VALUES (?, ?)',
      [name, age]
    );
    // Return the created user
    // result.insertId is the ID of the new created user
    res.status(201).json({ id: result.insertId, name, age });
  } catch (err) {
    handleServerError(res, err, 'Failed to create user');
  }
});

// Read all users
app.get('/users', async (req, res) => {
  try {
    const rows = await executeQuery('SELECT * FROM users;');

    // Return all users
    res.status(200).json(rows);
  } catch (err) {
    handleServerError(res, err, 'Failed to fetch users list');
  }
});

// Read
app.get('/users/:id', async (req, res) => {
  try {
    const rows = await executeQuery('SELECT * FROM users WHERE id = ?;', [req.params.id]);

    // Return the user
    rows.length === 0
      ? res.status(404).json({ error: 'Found no user' })
      : res.status(200).json(rows[0]);
  } catch (err) {
    handleServerError(res, err, 'Failed to fetch user');
  }
});

// Update user
app.put('/users/:id', async (req, res) => {
  const { name, age } = req.body;
  try {
    const result = await executeQuery(
      'UPDATE users SET name = ?, age = ? WHERE id = ?',
      [name, age, req.params.id]
    );

    // Return the updated user
    result.affectedRows === 0
      ? res.status(404).json({ error: 'User not found' })
      : res.status(200).json({ id: req.params.id, name, age });
  } catch (err) {
    handleServerError(res, err, 'Failed to update user');
  }
});

// Delete
app.delete('/users/:id', async (req, res) => {
  try {
    const result = await executeQuery(
      'DELETE FROM users WHERE id = ?',
      [req.params.id]
    );

    // Return the result of the deletion
    result.affectedRows === 0
      ? res.status(404).json({ error: 'User not found' })
      : res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) { // エラー処理
    handleServerError(res, err, 'Failed to delete user');
  }
});

// Graceful shutdown
// Listen for termination signals
// SIGINT: Ctrl+C
// SIGTERM: kill command
// SIGHUP: Terminal close
['SIGINT', 'SIGTERM', 'SIGHUP'].forEach(signal => {
  process.on(signal, async () => {
    console.log(`\n${signal} received. Closing the server...`);
    await closePool();
    process.exit();
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`${PORT}: Server is running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});

