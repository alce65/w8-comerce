/* eslint-disable comma-dangle */
const Cart = require('../models/cart.model');
const { getAll } = require('./product.controller');
const Product = require('../models/product.model');

async function getAllCarts({ query }, res) {
  console.log('getAllCarts', query);
  const cartItems = await Cart.find(query).populate({
    path: 'products.product',
    select: ['price', 'stock', 'brand'],
  });

  res.json(cartItems);
}
async function createOneCart({ body }, res) {
  const createdCartItem = await Cart.create(body);
  res.json(createdCartItem);
}

async function makeBuyOperation(req, res) {
  // TODO Pasarela compras - actulizació de stocks
  getAll(req, res);
}

// Modelo map
// async function createOneCart({ body }, res) {
//   // const validProducts = [];
//   // const userCart = await Cart.create([]);
//   const userCart = new Cart();
//   const inStock = await Promise.all(
//     body.products.map(async (item) => {
//       const availableInStock = await Product.findOneAndUpdate(
//         {
//           _id: item.product,
//           stock: { $gte: item.amount },
//         },
//         {
//           $inc: { stock: -item.amount },
//         }
//       );
//       return availableInStock;
//     })
//   );
//   // console.log(inStock);
//   inStock.forEach((item) => {
//     if (item) {
//       // validProducts.push(current);
//       userCart.products.push(item);
//     }
//   });
//   await userCart.save();

//   // const userCart = await Cart.create(validProducts);
//   res.json(userCart);
//   return userCart;
// }

// ByGilberto
// async function createOneCart2({ body }, res) {
//   // const validProducts = [];
//   // const userCart = await Cart.create([]);
//   const userCart = new Cart();
//   await body.products.forEach(async (item) => {
//     const isStockAvailable = await Product.findOneAndUpdate(
//       {
//         _id: item.product,
//         stock: { $gte: item.amount },
//       },
//       {
//         $inc: { stock: -item.amount },
//       }
//     );
//     if (isStockAvailable) {
//       // validProducts.push(current);
//       userCart.products.push(item);
//       await userCart.save();
//     }
//   });

//   // const userCart = await Cart.create(validProducts);
//   await res.json(userCart);
// }

async function createOneCart({ body }, res) {
  // const validProducts = [];
  // const userCart = await Cart.create([]);
  const userCart = new Cart();

  // await
  for (let i = 0; i < body.products.length; i++) {
    const item = body.products[i];
    const isStockAvailable = await Product.findOneAndUpdate(
      {
        _id: item.product,
        stock: { $gte: item.amount },
      },
      {
        $inc: { stock: -item.amount },
      }
    );
    console.log({ isStockAvailable });
    if (isStockAvailable) {
      // validProducts.push(current);
      userCart.products.push(item);
      await userCart.save();
    }
  }

  // const userCart = await Cart.create(validProducts);
  await res.json(userCart);
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
  getAllCarts,
  createOneCart,
  makeBuyOperation,
  getOneById,
  updateOneById,
  deleteOneById,
};
