const router = require("express").Router()
const orderCtrl = require("../controllers/OrderController")

///to get all orders
router.get("/", orderCtrl.getOrders)

//post new order
router.post("/", orderCtrl.CreateOrder)

//update
router.put("/:id", orderCtrl.updateOrder)

//delete order
router.delete("/:id", orderCtrl.deleteOrder)

module.exports = router
