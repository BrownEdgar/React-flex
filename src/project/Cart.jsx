import React from 'react';
import './Cart.scss';

const Cart = ({ cart, total, onRemove, onClose, onClear }) => {
  return (
    <div className="cart-popup">
      <div className="cart-content">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Brand: {item.brand}</p>
                  <p>Price: ${item.price}</p>
                  <p>number: {item.number}</p>
                  <p>Product Total: ${(item.price * item.number).toFixed(3)}</p>
                  <button onClick={() => onRemove(item.id)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p>Total Price: ${(total).toFixed(3)}</p>
        <button onClick={onClear}>Clear Cart</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Cart;

