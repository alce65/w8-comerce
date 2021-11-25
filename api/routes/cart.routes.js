const express = require('express');

const router = express.Router();

const {
  getAllCarts,
  createOneCart,
  makeBuyOperation,
  getOneById,
  updateOneById,
  deleteOneById,
} = require('../controllers/cart.controller');

// router.get('/', ....)

router.route('/').get(getAllCarts).post(createOneCart);
router.route('/buy').post(makeBuyOperation);
router.route('/:id').get(getOneById).patch(updateOneById).delete(deleteOneById);

module.exports = router;
