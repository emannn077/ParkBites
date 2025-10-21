const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT || 3001
const db = require("/db")

const { Order } = require("./models")
const { error } = require("console")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger("dev"))

//Order Routes here
app.get("/orders", async (req, res) => {
  try {
    let orders = await Order.find({})
    res.status(200).send(orders)
  } catch (error) {
    res.status(500).send({ message: "Error fetching order!", error })
  }
})

app.post("/orders", async (req, res) => {
  try {
    const newOrder = await Order.create(req.body)
    res.status(200).send(newOrder)
  } catch (Error) {
    res.status(500).send({ message: "Error creating order!", error })
  }
})

//Cart Routes here
// app.get('/cart')

app.listen(PORT, () => {
  console.log(`Express server is running on port`, PORT, `...`)
})
