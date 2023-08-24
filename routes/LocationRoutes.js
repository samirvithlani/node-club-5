const getLocation = require("../controller/GetLocationFromAPi");
const router = require("express").Router();
router.get("/", getLocation.getUserLocation);
module.exports = router;
