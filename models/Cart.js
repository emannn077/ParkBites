import { Schema } from "mongoose"

const cartSchema = new Schema({
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

export default cartSchema
