const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    truck: { type: Schema.Types.ObjectId, ref: "Truck", required: true },
    items: [
      {
        item: { type: Schema.Types.ObjectId, ref: "MenuItem", required: true },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    notes: String,
    total: Number,
  },
  { timestamps: true }
)
const Order = mongoose.model("Order", orderSchema)
module.exports = {Order}

