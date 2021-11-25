/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import actionTypes from './action.types';

const initialCart = {
  items: [],
  totalPrice: 0,
};

export function cartReducer(cart = initialCart, action) {
  let nextCart = cart;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      nextCart = {
        items: cart.items.some(
          (item) => item.product === action.product.product
        )
          ? cart.items.map((item) => {
              if (item.product === action.product.product) {
                return {
                  ...item,
                  amount: item.amount + action.product.amount,
                };
              }
              return item;
            })
          : [...cart.items, action.product],
        totalPrice:
          cart.totalPrice + action.product.amount * action.product.price,
      };
      break;

    case actionTypes.PAY_PRODUCTS:
      nextCart = { ...initialCart };
      break;
    default:
      break;
  }
  return nextCart;
}
