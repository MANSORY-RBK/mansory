import React from 'react';

const ProductDetails = (props) => {
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={props.product.imageUrl} alt="Product" />
      </div>
      <div className="product-info">
        <h1 className="product-name">{props.product.name}</h1>
        <p className="product-description">{props.product.description}</p>
        <h2 className="product-price">Price: ${props.product.price}</h2>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
