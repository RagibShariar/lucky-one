import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
  const { id, name, image, volume, price, rating } = props.product;
  const { handleAddToCart, product } = props;

  return (
    <div className="product">
      <img src={image} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Volume: {volume}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Ratings: {rating}</small>
        </p>
      </div>

      <div className="add-to-cart">
        <button onClick={() => handleAddToCart(product)} className="btn-cart">
          <p>Add to List</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
