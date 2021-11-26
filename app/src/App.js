import { Provider } from 'react-redux';
import configureStore from './redux/index';

import './App.css';
import Products from './componets/products/products';
import Cart from './componets/cart/cart';
import Login from './componets/login/login';

function App() {
  return (
    <Provider store={configureStore()}>
      <section>
        <header>
          <h1>Login</h1>
        </header>
        <Login />
      </section>
      {localStorage.getItem('user') ? (
        <section>
          <header>
            <h1>Carrito</h1>;
            <Products />
            <Cart />
          </header>
        </section>
      ) : (
        <p>Inicia sesion</p>
      )}
    </Provider>
  );
}

export default App;
