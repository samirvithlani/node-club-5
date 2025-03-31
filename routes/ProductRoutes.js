const express = require('express');
const router = express.Router();
const productController = require('../controller/ProductController');
router.post('/create', productController.createProduct);
router.get('/getall', productController.getAllProducts);
router.post("/addproducts",productController.createManyProduct)
module.exports = router;