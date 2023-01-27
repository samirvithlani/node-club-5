const testController = require('../controller/TestController');
const express = require('express');
//Router is a class in express
const router = express.Router();
router.get('/t',testController.testApi)
router.get('/getAllData',testController.getAllData)

module.exports = router;