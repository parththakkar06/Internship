const { MongoClient } = require("mongodb")

const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)

let db;

const connectDb = async() => {
    await client.connect()
    db = client.db("autodownload")
    console.log("MongoDb Connected")
}

const getDb = () => {
    return db
}

module.exports = {
    getDb,
    connectDb
}