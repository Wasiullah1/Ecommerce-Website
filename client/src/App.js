import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import Country from './pages/Country';
import FAQ from './pages/FAQ';
// import Delivery from './pages/Delivery';
import Cart from './pages/Cart';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Checkout from './pages/Checkout';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword'; // ⬅️ Import the page



const App = () => {
  
  return (
    // <UserProvider value={} >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/country" element={<Country />} />
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/delivery" element={<Delivery />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </Router>

  );
};

export default App;
