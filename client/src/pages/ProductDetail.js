import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/productDetail.css';

const sampleProducts = [
  {
    id: '1',
    name: 'Green Tea Drink',
    price: 3.49,
    image: 'https://via.placeholder.com/300',
    stock: 10,
    description: 'Refreshing green tea with a hint of jasmine.',
  },
  {
    id: '2',
    name: 'Coffee Beans',
    price: 7.99,
    image: 'https://via.placeholder.com/300',
    stock: 5,
    description: 'Premium roasted coffee beans from Colombia.',
  },
  {
    id: '3',
    name: 'Curry Noodles',
    price: 1.99,
    image: 'https://via.placeholder.com/300',
    stock: 0,
    description: 'Spicy and savory curry-flavored instant noodles.',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product.stock < 1) {
      alert('Out of stock!');
      return;
    }
    if (quantity < 1 || quantity > product.stock) {
      alert(`Enter a valid quantity (1 - ${product.stock})`);
      return;
    }
    alert(`Added ${quantity} x ${product.name} to cart`);
  };

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="desc">{product.description}</p>
        <p className="stock">Stock: {product.stock}</p>
        <div className="quantity">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />
        </div>
        <button
          onClick={handleAddToCart}
          disabled={product.stock < 1}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
