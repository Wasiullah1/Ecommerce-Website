import React from 'react';
import '../styles/productCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={`http://localhost:5000${product.image}`} alt={product.name} />
      </Link>
      <h4>{product.name}</h4>
      <p>${product.price.toFixed(2)}</p>
      {product.stock < 1 ? (
        <span className="out-of-stock">Out of Stock</span>
      ) : (
        <button onClick={() => alert('Added to cart')}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
