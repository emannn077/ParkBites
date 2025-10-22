const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    truckName: { type: String, required: true },
    items: [
      {
        name: String,
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true },
      },
    ],
    notes: String,
    total: Number,
  },
  { timestamps: true }
)
const Order = mongoose.model("Order", orderSchema)
module.exports = { Order }
