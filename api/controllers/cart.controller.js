const Cart = require('../models/cart.model');

async function getAllCarts() {
  console.log(Cart);
}

async function createOneCart() {
  //
}
async function getOneById() {
  //
}
async function updateOneById() {
  //
}
async function deleteOneById() {
  //
}

module.exports = {
  getAll: getAllCarts,
  createOne: createOneCart,
  getOneById,
  updateOneById,
  deleteOneById,
};
