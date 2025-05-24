import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProductManagementScreen from './pages/ProductManagementScreen';
import AddProduct from './pages/AddProduct'
import Users from './pages/Users';
import Orders from './pages/Orders';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<ProductManagementScreen />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/users" element={<Users />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
