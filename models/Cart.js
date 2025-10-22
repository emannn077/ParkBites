const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  total: { type: Number, default: 0 },
})
const Cart = mongoose.model("Cart", cartSchema)
module.exports = { Cart }
