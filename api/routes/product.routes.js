/* const { Router } = require('express');
const router = new Router(); */

const express = require('express');
const { getAll } = require('../controllers/product.controller');

const router = express.Router();

router.get('/', getAll);

module.exports = router;
