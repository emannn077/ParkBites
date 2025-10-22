import { Schema } from "mongoose"

const orderSchema = new Schema(
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

export default orderSchema
