const express = require('express');
const router = express.Router();
const client = require('../conexion');

router.get('/', async (req, res) => {
  try {
    const collection = client.db('bd_onlywater').collection('infoplantas2');
    const results = await collection.find({}).toArray();
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

module.exports = router;
