import React, { useState } from 'react';
import '../styles/cart.css'; // make sure this CSS file exists
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'YooH Green Tea Drink',
      price: 3.99,
      quantity: 2,
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Trung Nguyen Coffee',
      price: 5.49,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    const updatedCart = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = id => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      alert("Please login to continue to checkout.");
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
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
