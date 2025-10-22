require("dotenv").config()
const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const methodOverride = require("method-override")
require("./db/index")

const cartRouter = require("./routes/CartRouter")
const orderRouter = require("./routes/OrderRouter")

const app = express()
const PORT = process.env.PORT || 3001
const db = require("./db/index")

app.use(methodOverride("._method"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger("dev"))

app.get("/", (req, res) => {
  res.send("ParkBites Api is running")
})

app.use("/carts", cartRouter)
app.use("/orders", orderRouter)

// app.use((req,res)=> {
//   res.status(404).send({message: 'Route not found'})
// })

const { error } = require("console")

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}...`)
})
