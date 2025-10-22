const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const OrderRouter = require("./routes/OrderRouter")
const CartRouter = require("./routes/CartRouter")

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger("dev"))

// Use routers
app.use("/api/orders", OrderRouter)
app.use("/api/cart", CartRouter)

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}...`)
})
