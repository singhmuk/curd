const connection = require('../db');


exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
console.log('aws');
  connection.query(query, [name, email], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.status(201).send('User created');
    }
  });
};

exports.getAll = (req, res) => {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.json(results);
    }
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM users WHERE id = ?';

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else if (results.length === 0) {
      res.status(404).send('User not found');
    } else {
      res.json(results[0]);
    }
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';

  connection.query(query, [name, email, id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.send('User updated');
    }
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.send('User deleted');
    }
  });
};
