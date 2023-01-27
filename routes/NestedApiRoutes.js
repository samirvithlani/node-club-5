const express  = require('express');
const router   = express.Router();
const NestedApi = require('../controller/NestedApi');
router.get('/nestedApi', NestedApi.getAllData);
module.exports = router;