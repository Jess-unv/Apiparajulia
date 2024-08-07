const express = require('express');
const router = express.Router();
const client = require('../conexion');

router.get('/', async (req, res) => {
  try {
    const collection = client.db('bd_onlywater').collection('usuarios');
    const results = await collection.find({}).toArray();
    res.status(200).json(results);
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).send('Error en la consulta a la base de datos');
  }
});

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const collection = client.db('bd_onlywater').collection('usuarios');
    const user = await collection.findOne({ email: username, contra: password });
    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).send('Error en la consulta a la base de datos');
  }
});

module.exports = router;
