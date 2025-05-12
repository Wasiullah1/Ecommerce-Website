import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/category">By Category</Link></li>
        {/* <li><Link to="/country">By Country</Link></li> */}
        <li><Link to="/products">All Products</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        {/* <li><Link to="/delivery">Delivery</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
