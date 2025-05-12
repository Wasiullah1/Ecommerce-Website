import React from 'react';
import '../styles/productCarousel.css';

const ProductCarousel = () => {
  const products = [
    { name: 'YooH Green Tea Drink', price: '$3.49', discount: '15%' },
    { name: 'Trung Nguyen Coffee', price: '$5.99', discount: '' },
    { name: 'Vifon Curry Noodles', price: '$1.99', discount: '20%' }
  ];

  return (
    <section className="carousel">
      <h2>ON SALE</h2>
      <div className="carousel-products">
        {products.map((prod, idx) => (
          <div className="product-card" key={idx}>
            <div className="product-img">🧃</div>
            <h4>{prod.name}</h4>
            <p className="price">{prod.price}</p>
            {prod.discount && <span className="discount">{prod.discount}</span>}
            <button className="add-cart-btn" onClick={() => alert('Added to cart')}>ADD TO CART</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;
