const express = require('express');
const router = express.Router();
const readDataFromFile = require('../controller/ReadDataFromxl');

router.post('/readDataFromFile',readDataFromFile.readDataFromFile);
module.exports = router;
