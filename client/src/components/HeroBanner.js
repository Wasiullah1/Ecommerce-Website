import React from 'react';
import '../styles/heroBanner.css';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Grocery shopping</h1>
        <p>We make it easy – Click, Click, Done!</p>
        <button onClick={handleShopNow}>SHOP NOW</button>
      </div>
      <img
        src="https://i.ibb.co/xSmxS9p/food-banner.png"
        alt="Grocery items"
        className="hero-img"
      />
    </section>
  );
};

export default HeroBanner;
