const Order = require("../models/Order")

// Create a new order
const CreateOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body)
    res.status(200).json(order) // ✅ Fixed variable name and used json
  } catch (error) {
    console.error("Error creating order:", error.message)
    res.status(500).json({ message: error.message })
  }
}

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
    res.status(200).json(orders)
  } catch (error) {
    console.error("Error fetching orders:", error.message)
    res.status(500).json({ message: error.message })
  }
}
// Update an order
const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(order)
  } catch (error) {
    console.error("Error updating order:", error.message)
    res.status(500).json({ message: error.message })
  }
}

// Delete an order
const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json({ msg: "Order deleted" })
  } catch (error) {
    console.error("Error deleting order:", error.message)
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getOrders,
  CreateOrder,
  deleteOrder,
  updateOrder,
}
