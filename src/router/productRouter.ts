const express = require('express');

import clientController from '../controller/productController';

const router = express.Router();

router.get('/products', clientController.getProduct);

router.post('/products', clientController.postProduct);

router.put('/product/:id', clientController.putProduct);

router.delete('/product/:id', clientController.deleteProduct);

export default router;