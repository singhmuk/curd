const mysql = require('mysql2');

const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root!2345',
//   database: 'mysqls'
    host: 'localhost',
    user: 'root',
    password: 'root!2345',
    database: 'ecommerce'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;
