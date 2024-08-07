const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log('Conectado a la base de datos MongoDB');
  } catch (err) {
    console.error('No está conectado, error:', err);
  }
}

connectDB();

module.exports = client;
