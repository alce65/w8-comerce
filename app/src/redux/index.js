/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './products.reducer';
import { cartReducer } from './cart.reducer';

export default function configureStore(preloadState) {
  const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    preloadState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
