const express = require('express');

import userController from '../controller/userController';

const router = express.Router();

router.get('/users', userController.getUser);

router.post('/users', userController.postUser);

router.put('/user/:id', userController.putUser);

router.delete('/user/:id', userController.deleteUser);

export default router;