import { Provider } from 'react-redux';
import configureStore from './redux/index';

import './App.css';
import Products from './componets/products/products';
import Cart from './componets/cart/cart';

function App() {
  return (
    <Provider store={configureStore()}>
      <header>
        <h1>Carrito</h1>;
        <Products />
        <Cart />
      </header>
    </Provider>
  );
}

export default App;
