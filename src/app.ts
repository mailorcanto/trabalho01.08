const express = require("express");

const app = express();

app.use(express.json());

import clientRouter from './router/clientRouter';

//import productRouter from './router/productRouter';
   
app.use('/api/', clientRouter);

export default app;