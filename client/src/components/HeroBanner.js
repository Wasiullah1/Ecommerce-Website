import React from 'react';
import '../styles/heroBanner.css';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const navigate = useNavigate();

  // const handleShopNow = () => {
  //   navigate('/products');
  // };
  const handleShopNow = ()=>{
    navigate('/products')
  }
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Fast Foods</h1>
        <p>We make it easy – Click, Click, Done!</p>
        <button onClick={handleShopNow}>SHOP NOW</button>
      </div>
      {/* <img
        src="https://media.istockphoto.com/id/1232405971/fi/valokuva/buffetp%C3%B6yt%C3%A4-kohtaus-take-out-tai-toimitus-elintarvikkeita-yl%C3%A4puolella-n%C3%A4kym%C3%A4-tumma-puu.jpg?s=1024x1024&w=is&k=20&c=PVDbu-kITMRSMk1CgeDmkeGKh83mcrd_Cfv-hhcT8j4="
        alt="Grocery items"
        className="hero-img"
      /> */}
    </section>
  );
};

export default HeroBanner;
