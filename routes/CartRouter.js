const router = require("express").Router()
const cartCtrl = require("../controllers/CartController")

router.get("/", cartCtrl.getCarts)
router.post("/", cartCtrl.createCart)
router.put("/:id", cartCtrl.updateCart)
router.delete("/:id", cartCtrl.deleteCart)

module.exports = router
