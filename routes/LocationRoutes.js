const getLocation = require("../controller/GetLocationFromAPi");
const router = require("express").Router();
router.get("/", getLocation.getUserLocation);
router.post("/", getLocation.postLocation);

module.exports = router;
