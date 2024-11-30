const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'task',
  port:3307
});
// close the MySQL connection
// connection.end();
module.exports=connection;