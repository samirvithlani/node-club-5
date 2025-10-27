const router = require("express").Router()
const itemController = require("../controller/ItemController")

router.post("/",itemController.createItem)
router.get("/",itemController.getAllItems)
module.exports = router