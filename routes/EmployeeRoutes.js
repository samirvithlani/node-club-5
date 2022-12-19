const express = require('express');
const router = express.Router();
const employeeController = require('../controller/EmployeeController');

router.post('/create', employeeController.createEmployee);
module.exports = router;