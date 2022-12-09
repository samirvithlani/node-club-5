const userController = require('../controller/UserController');
const express = require('express');
const router = express.Router();
router.get('/user',userController.getAllUsers)
module.exports = router;