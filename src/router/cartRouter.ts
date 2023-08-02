const express = require('express');

import cartController from '../controller/cartController';

const router = express.Router();

router.get('/carts', cartController.getCart);

router.post('/carts', cartController.postCart);

router.put('/cart/:id', cartController.putCart);

router.delete('/cart/:id', cartController.deleteCart);

export default router;