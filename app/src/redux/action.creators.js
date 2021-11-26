/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './action.types';

export function loadProducts() {
  const api = 'http://localhost:3030';
  //process.env.REACT_APP_API;
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get(`${api}/product`);
      console.log(products);
      dispatch({ type: actionTypes.LOAD_PRODUCTS, products });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_LOAD_PRODUCTS, error });
    }
  };
}

export function addToCart(product, amount = 1) {
  return {
    type: actionTypes.ADD_TO_CART,
    product: {
      amount,
      product: product._id,
      name: product.name,
      price: product.price,
    },
  };
}

export function payProducts(cart) {
  return async (dispatch) => {
    try {
      const url = 'http://localhost:3030';
      const token = JSON.parse(localStorage.getItem('user')).token;

      const { data: products } = await axios.post(`${url}/cart/buy`, cart, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({ type: actionTypes.PAY_PRODUCTS, products });
    } catch (error) {
      dispatch({ type: actionTypes.FAILED_PAY_PRODUCTS, error });
    }
  };
}
