const mongoose = require("mongoose")
require("dotenv").config()

mongoose.set("strictQuery", false)
//mongoose.set('debug',true)

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.log("Connection error", error.message)
  }
}
//to connect
connect()
const db = mongoose.connection
module.exports = db
