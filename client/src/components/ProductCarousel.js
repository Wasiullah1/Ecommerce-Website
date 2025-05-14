import '../styles/productCarousel.css';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productApi';
import { Link } from 'react-router-dom';

const ProductCarousel = () => {
  // const products = [
  //   { name: 'YooH Green Tea Drink', price: '$3.49', discount: '15%' },
  //   { name: 'Trung Nguyen Coffee', price: '$5.99', discount: '' },
  //   { name: 'Vifon Curry Noodles', price: '$1.99', discount: '20%' }
  // ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts();
      setProducts(data.slice(0, 5)); // only show top 5 products for carousel
    };
    loadData();

  }, []);
  
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
    <section className="carousel">
      <h2>ON SALE</h2>
      <div className="carousel-products">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
          <div className="product-card" key={product._idx}>
            <div className="product-img">🧃</div>
            <Link to={`/product/${product._id}`} className="link-style"><h4>{product.name}</h4></Link>
            <p className="price">{product.price}</p>
            {product.discount && <span className="discount">{product.discount}</span>}
            <button className="add-cart-btn" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
          </div>
        )))}
      </div>
    </section>
  );
};

export default ProductCarousel;
