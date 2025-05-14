import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/productDetail.css';
import { fetchProducts } from '../api/productApi';

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);

   useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!products) {
    return <div className="product-detail-loading">Loading...</div>;
  }

  const handleAddToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingProduct = cart.find(item => item._id === product._id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
};


  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={products.image} alt={products.name} />
      </div>

      <div className="product-info">
        <h2>{products.name}</h2>
        <p className="product-brand">{products.brand}</p>
        <p className="product-category">Category: {products.category}</p>
        <p className="product-description">{products.description}</p>
        <h3 className="product-price">${products.price}</h3>

        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(products)}>Add to Cart</button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
