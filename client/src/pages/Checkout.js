import React, { useState } from 'react';
import '../styles/checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = e => {
    e.preventDefault();

    // Simple validation
    const { fullName, email, phone, address, city, zip } = formData;
    if (!fullName || !email || !phone || !address || !city || !zip) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Order placed successfully!");
    // Here we would send this info to backend (when implemented)
    localStorage.removeItem('cart'); // clear cart after order
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handlePlaceOrder}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Street Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
