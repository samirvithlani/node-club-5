const userController = require('../controller/UserController');
const express = require('express');
const router = express.Router();
router.get('/user',userController.getAllUsers)
router.post('/user',userController.createUser)
router.get('/user/:id',userController.getUserById)
router.delete('/user/:id',userController.deleteUser)

module.exports = router;