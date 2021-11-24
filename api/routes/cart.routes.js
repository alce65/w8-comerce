const express = require('express');

const router = express.Router();

const {
  getAllCarts,
  createOne,
  getOneById,
  updateOneById,
  deleteOneById,
} = require('../controllers/cart.controller');

// router.get('/', ....)

router.route('/').get(getAllCarts).post(createOne);
router.route('/:id').get(getOneById).patch(updateOneById).delete(deleteOneById);

module.exports = router;
