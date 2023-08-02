const express = require("express");

const app = express();

app.use(express.json());

import clientRouter from './router/clientRouter';
app.use('/api/', clientRouter);

import productRouter from './router/productRouter';
app.use('/api/', productRouter);

export default app;