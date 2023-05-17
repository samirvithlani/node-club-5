const express = require('express');
const router = express.Router();
const FormController = require('../controller/FormController');
router.get('/', FormController.getForms);
router.post('/', FormController.createForm);
module.exports = router;