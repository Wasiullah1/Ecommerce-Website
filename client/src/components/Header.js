import React, { useState, useEffect, useContext } from 'react';
import '../styles/header.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loginContext from '../context/login-context';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginCtx = useContext(loginContext)

  const { cart } = useCart(); // Get cart from context

  const totalAmount = cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
  
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
        <button className="search-button">Search</button>
      </form>
      <div className="header-icons">
        <div className="cart"><Link to="/cart" className="link-style">🛍️ ${totalAmount}</Link></div>
        <div className="auth">{isAuthenticated ? (<button onClick={handleLogout} className='link-style'>Logout</button>
        ):(
        <Link to="/login" className="link-style">{loginCtx.token ? `${loginCtx.username}` : "Login/Register"}</Link>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;
