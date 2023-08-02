const express = require('express');

import clientController from '../controller/clientController';

const router = express.Router();

router.get('/clients_ecommerce', clientController.getClient);

router.post('/clients_ecommerce', clientController.postClient);

router.put('/client_ecommerce/:id', clientController.putClient);

router.delete('/client_ecommerce/:id', clientController.deleteClient);

export default router;