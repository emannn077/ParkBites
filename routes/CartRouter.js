const router = require("express").Router()
const controller = require("../controllers/.CartController")

router.get("/", controller.GetCarts)
router.post("/", controller.CreateCarts)
router.put("/:id", controller.UpdateCarts)
router.delete("/:id", controller.DeleteCarts)

module.exports = router
