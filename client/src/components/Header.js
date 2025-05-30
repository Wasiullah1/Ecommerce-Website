import React, { useState, useEffect } from 'react';
import '../styles/header.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';
import axios from 'axios';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

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
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get('http://localhost:5000/api/users/login', { withCredentials: true });
        setIsAuthenticated(true);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/logout', {}, { withCredentials: true });
      setIsAuthenticated(false);
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };
  return (
    <header className="header">
      <div className="logo">🛒 ZaiQa</div>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="header-icons">
        <div className="cart"><Link to="/cart" className="link-style">🛍️ ${totalAmount}</Link></div>
        <div className="auth">{isAuthenticated ? (<button onClick={handleLogout} className='link-style'>Logout</button>
        ):(
        <Link to="/login" className="link-style">Login/Register</Link>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;
