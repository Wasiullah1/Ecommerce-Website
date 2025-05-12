import React from 'react';
import ProductCard from './ProductCard';
import '../styles/productGrid.css';

const sampleProducts = [
  {
    id: '1',
    name: 'Green Tea Drink',
    price: 3.49,
    image: 'https://via.placeholder.com/150',
    stock: 10,
  },
  {
    id: '2',
    name: 'Coffee Beans',
    price: 7.99,
    image: 'https://via.placeholder.com/150',
    stock: 5,
  },
  {
    id: '3',
    name: 'Curry Noodles',
    price: 1.99,
    image: 'https://via.placeholder.com/150',
    stock: 0,
  },
  // Add more if needed
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {sampleProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
