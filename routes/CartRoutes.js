const express = require('express');
const router = express.Router();
const cartController = require('../controller/CartController');
router.post('/addtocart', cartController.addToCart);
router.get('/getcartdetails', cartController.getCartDetails);
router.get('/getcartbyuserid/:id', cartController.getCartbyUserId);
module.exports = router;