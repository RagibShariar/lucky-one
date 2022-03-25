import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, image, volume, price, rating } = props.product;
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
      <button className="btn-cart">
        <p>Add to Cart</p>
      </button>
    </div>
    );
};

export default Product;