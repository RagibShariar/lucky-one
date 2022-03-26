import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // load json data
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add event handler
  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <h3>You've Selected</h3>
        <p>Selected: {cart.length}</p>
        {/* <h5>gfrsf: {cart}</h5> */}
        <div>
          {cart.map(product =>
            <h5 key={product.id}>{product.name}</h5>
          )}
          
        </div>



        <button className="my-btn">Choose 1 For Me</button>
        <button className="my-btn">Choose Again</button>
      </div>
    </div>
  );
};

export default Shop;
