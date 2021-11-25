/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import actionTypes from './action.types';

const initialProducts = [];

export function productsReducer(products = initialProducts, action) {
  let nextProducts = products;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      nextProducts = action.products;
      break;
    case actionTypes.ADD_TO_CART:
      nextProducts = products.map((product) => {
        if (product._id === action.product.product) {
          product.stock -= action.product.amount;
        }
        return product;
      });
      break;

    case actionTypes.PAY_PRODUCTS:
      nextProducts = action.products;
      break;

    default:
      break;
  }

  return nextProducts;
}
