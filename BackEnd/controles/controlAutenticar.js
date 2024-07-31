const jwt = require('jsonwebtoken');
const db = require('../configuracion/basedatos');

exports.register = (req, res) => {
  const { username, password } = req.body;

  db.query('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, password], (err, result) => {
    if (err) return res.status(500).send('Error registrando el usuario');
    res.send('Usuario registrado saticfactoriamente');
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM usuarios WHERE username = ?', [username], (err, results) => {
    if (err) return res.status(500).send('Error de ingreso');
    if (results.length === 0) return res.status(400).send('Usuario no encontrado');

    const usuario = results[0];
    const isPasswordValid = password === usuario.password;

    if (!isPasswordValid) return res.status(400).send('Contraseña invalida');

    res.send('Ingreso satisfactorio');
  });
};
