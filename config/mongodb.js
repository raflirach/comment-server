
const { MongoClient } = require('mongodb')

let database = null

async function connect() {
  try {
    const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.si30c.mongodb.net/comments?retryWrites=true&w=majority`
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    
    await client.connect()

    const db = client.db(`comments`)

    db

    database = db

  } catch (err) {
    next(err);
  }
}

const getDatabase = () => database

module.exports = {
  connect,
  getDatabase
}