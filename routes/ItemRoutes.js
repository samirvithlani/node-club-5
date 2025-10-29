const router = require("express").Router()
const itemController = require("../controller/ItemController")
const authMiddleware1 = require("../middleware/AuthMiddleware2")

router.post("/",itemController.createItem)
router.get("/",authMiddleware1.AuthMiddlware1,itemController.getAllItems)
module.exports = router