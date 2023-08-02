const express = require("express");

const app = express();

app.use(express.json());

import clientRouter from './router/clientRouter';
app.use('/api/', clientRouter);

import productRouter from './router/productRouter';
app.use('/api/', productRouter);

import cartRouter from './router/cartRouter';
app.use('/api/', cartRouter);

export default app;