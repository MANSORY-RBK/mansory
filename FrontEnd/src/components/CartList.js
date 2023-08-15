
import React from 'react';

const CartList = (props) => {
  const totalPrice = props.product.reduce((total, element) => total + element.price, 0);

  return (
    <div className='cart-list'>
      <h1>My Cart</h1>
      <div className='cart-items'>

        {props.product.map((e, index) => (
          <div className='cart-item' key={index}>
            <span>Product Name: {e.name}</span>
            <span>Price: ${e.price}</span>
            <button
              className='cart-list-button'
              onClick={() => props.removeFromCart(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div className='cart-total'>
        <p>Total Price: ${totalPrice}</p>
      </div>
      <button className='checkout-button' onClick={props.Checkout} >
        Checkout
      </button>
    </div>
  );
};

export default CartList;