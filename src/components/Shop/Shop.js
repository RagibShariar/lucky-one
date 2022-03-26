import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [randomItem, setRandomItem] = useState([]);

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
    
  };

  // random item generate
  const showRandom = () => {
    const item = cart[Math.floor(Math.random() * cart.length)];
    setRandomItem(item.name); 
    setCart([]);
  };
  // clear cart
  const clearCart = (product) => {
    setCart([]);
    setRandomItem([]);
  };

  return (
    <div className="shop-container">
      <div className="cart-container">
        <h3>You've Selected: {cart.length} items</h3>

        <div>
          {cart.map((product) => (
            <div className='cart-div' key={product.id}>
                <img className='cart-img'  src={product.image}  alt="" />
                <p className="cart-item" >
                   {product.name} 
             </p>
            </div>
            
           
          ))}
        </div>
        <div>
          <h2 className="random-item">{randomItem} </h2>
        </div>

        <button onClick={() => showRandom(cart)} className="my-btn">
          Choose 1 For Me
        </button>
        <button onClick={() => clearCart(cart)} className="my-btn">
          Choose Again
        </button>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
        
    </div>
      </div>
  );
};

export default Shop;
