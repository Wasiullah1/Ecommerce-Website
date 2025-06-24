// src/pages/Cart.js

import React, { useState, useEffect } from 'react';
import '../styles/cart.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, addToCart } = useCart(); // Access from context

  const handleQuantityChange = (id, amount) => {
    const item = cart.find((item) => item._id === id);
    if (!item) return;

    if (amount === -1 && item.quantity === 1) return;

    const updatedItem = { ...item, quantity: item.quantity + amount };
    removeFromCart(id);
    for (let i = 0; i < updatedItem.quantity; i++) {
      addToCart(item); // Add multiple times to set correct quantity
    }
  };

  // const handleRemoveItem = id => {
  //   const updatedCart = cartItems.filter(item => item._id !== id);
  //   setCartItems(updatedCart);
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  // };

  const getTotalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          {cart.map(item => (
            <div className="cart-item" key={item._id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(item._id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ${getTotalPrice()}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
