/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, addToCart } from '../../redux/action.creators';

import './products.css';

export default function Products() {
  const products = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  function handleAddClick(product) {
    dispatch(addToCart(product));
  }

  return (
    <div className="cards">
      {products.map((product) => (
        <div className="cards__item" key={product._id}>
          <div className="card">
            <div className="card__cover">
              <img
                src={
                  product.image_url || 'https://images.punkapi.com/v2/192.png'
                }
                alt={product.brand}
              />
            </div>

            <div className="card__content">
              <h2>{product.brand}</h2>
              <p>{product.description}</p>
              <p>stock: {product.stock}</p>
            </div>

            <div className="card__actions">
              <button
                // eslint-disable-next-line no-alert
                onClick={() => handleAddClick(product)}
                type="button"
                disabled={product.stock < 1}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
