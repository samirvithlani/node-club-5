const userController = require('../controller/UserController');
const express = require('express');

const zodMiddleware = require('../middleware/ZodMiddleware');
const userSchemaValidation = require('../util/UserSchemaValidation');
const authMiddleware = require('../middleware/AuthMiddleware');


const  router = express.Router();
router.get('/user',userController.getAllUsers)
router.post('/user',userController.createUser)
router.get('/user/:id',userController.getUserById)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
router.get('/test',userController.test)
router.post('/login',userController.loginUser)
router.get('/search/:name',userController.searchUserByName)
router.get('/filter',userController.filterUser)
router.get('/filter2',userController.filterUserData)


module.exports = router;