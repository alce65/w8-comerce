const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const productRouter = require('./routes/product.routes');
const cartRouter = require('./routes/cart.routes');

const { mongoConnect } = require('./config/connect');

const port = process.env.PORT;
const app = express();

mongoConnect();

app.use(express.json());
app.use(morgan('dev'));

app.use('/product', productRouter);
app.use('/cart', cartRouter);

// eslint-disable-next-line no-unused-vars
const server = app.listen(port);
