const express = require('express');

import productController from '../controller/productController';

const router = express.Router();

router.get('/products',productController.getProduct);

router.post('/products', productController.postProduct);

router.put('/product/:id', productController.putProduct);

router.delete('/product/:id', productController.deleteProduct);

export default router;