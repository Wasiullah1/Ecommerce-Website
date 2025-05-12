import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import Features from '../components/Features';
import ProductCarousel from '../components/ProductCarousel';
import Categories from '../components/Categories';

const Home = () => {
    
  return (
    <>
      <Topbar />
      <Header />
      <Navbar />
      <HeroBanner />
      <Features />
      <ProductCarousel />
      <Categories />
    </>
  );
};

export default Home;
