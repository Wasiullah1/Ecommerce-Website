import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/productList.css';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product._id}`} className="view-btn">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
