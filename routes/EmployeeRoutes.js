const express = require('express');
const router = express.Router();
const employeeController = require('../controller/EmployeeController');

router.post('/create', employeeController.createEmployee);
router.get('/get', employeeController.getEmployee);
module.exports = router;