import '../styles/productCarousel.css';
import React, { useEffect, useState, useContext } from 'react';
import { fetchProducts } from '../api/productApi';
import { Link } from 'react-router-dom';
import loginContext from '../context/login-context';
import { useCart } from '../context/CartContext';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products); // setProducts is your state setter
    };
    getProducts();
  }, []);
  
  const handleAddToCart = (product) => {
  // const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // const existingProduct = cart.find(item => item._id === product._id);
  // if (existingProduct) {
  //   existingProduct.quantity += 1;
  // } else {
  //   cart.push({ ...product, quantity: 1 });
  // }

  // localStorage.setItem('cart', JSON.stringify(cart));
  // alert(`${product.name} added to cart!`);
  addToCart(product);
  alert(`${product.name} added to cart!`);
};

  return (
    <section className="carousel">
      <h2>Products</h2>
      <div className="carousel-products">
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
         products
          .slice(0, 5)
          .map((product) => (
          <div className="product-card" key={product._id}>
            <div className="product-img">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
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
