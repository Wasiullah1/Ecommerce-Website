import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProductManagementScreen from './pages/ProductManagementScreen';
import AddProduct from './pages/AddProduct'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<ProductManagementScreen />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
