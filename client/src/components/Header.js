import React, { useState } from 'react';
import '../styles/header.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';;

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm.length === 0) {
      alert('Please enter a valid search term');
      return;
    }
    navigate(`/products?search=${encodeURIComponent(trimmedTerm)}`);
    setSearchTerm('');
  };
  return (
    <header className="header">
      <div className="logo">🛒 ZaiQa</div>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="header-icons">
        <div className="cart"><Link to="/cart">🛍️ $256.46</Link></div>
        <div className="auth"><Link to="/login">Login/Register</Link></div>
      </div>
    </header>
  );
};

export default Header;
