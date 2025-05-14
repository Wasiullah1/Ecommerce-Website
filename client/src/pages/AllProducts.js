import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productApi';
import '../styles/AllProducts.css';


const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="all-products-page">
      <h2>All Products</h2>
      <div className="products-grid">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllProducts;
