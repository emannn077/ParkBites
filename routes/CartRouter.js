const router = require("express").Router()
const controller = require("../controllers/CartController")

router.get("/", controller.GetCarts)
router.post("/", controller.CreateCart)
router.put("/:id", controller.UpdateCart)
router.delete("/:id", controller.DeleteCart)

module.exports = router
