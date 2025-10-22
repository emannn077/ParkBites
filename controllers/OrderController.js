const { Order } = require("../models/Order").default

const CreateOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body)
    res.status(200).send(order)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
    res.staus(200).send(orders)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).send(order)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).send({ msg: "order deleted" })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getOrders,
  CreateOrder,
  deleteOrder,
  updateOrder,
}
