const userController = require('../controller/UserController');
const express = require('express');

const zodMiddleware = require('../middleware/ZodMiddleware');
const userSchemaValidation = require('../util/UserSchemaValidation');
const authMiddleware = require('../middleware/AuthMiddleware');

const router = express.Router();
router.get('/user',authMiddleware.auth(),userController.getAllUsers)
router.post('/user',zodMiddleware.validate(userSchemaValidation),userController.createUser)
router.get('/user/:id',userController.getUserById)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)


module.exports = router;