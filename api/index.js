const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const productRouter = require('./routes/product.routes');
const cartRouter = require('./routes/cart.routes');
const userRouter = require('./routes/users.routes');
const loginRouter = require('./routes/login.routes');

const { mongoConnect } = require('./config/connect');

const port = process.env.PORT;
const app = express();

mongoConnect();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);

// eslint-disable-next-line no-unused-vars
const server = app.listen(port);
