// routes.js
const express = require('express');
const router = express.Router();

// Import your MySQL connection (assuming it's in index.js)
const connection = require('./index');

// Get tasks
router.get('/tasks', (req, res) => {
  const query = 'SELECT * FROM user_data';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results);
  });
});

module.exports = router;
