const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbconnect = async () => {
  let result = await client.connect();
  let db = result.db('krishna');
  return db.collection('krishna');
}

module.exports = dbconnect;