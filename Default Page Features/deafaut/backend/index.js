// index.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'k443godmomsatija',
  database: 'achievo',
  insecureAuth: true,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use the routes module for /tasks endpoint
app.use('/tasks', routes);


// Example route to get tasks
app.get('/tasks', (req, res) => {
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
