import React from 'react';
import ProductGrid from '../components/ProductGrid';
import '../styles/productList.css';

const ProductList = () => {
  return (
    <div className="product-list-page">
      <h2>All Products</h2>
      <ProductGrid />
    </div>
  );
};

export default ProductList;
