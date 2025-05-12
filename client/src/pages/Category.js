import React from 'react';
import '../styles/Category.css';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Snacks', image: '/images/snacks.jpg' },
  { name: 'Drinks', image: '/images/drinks.jpg' },
  { name: 'Instant Food', image: '/images/instant.jpg' },
  { name: 'Spices', image: '/images/spices.jpg' },
];

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="category-page">
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map((cat) => (
          <div
            className="category-card"
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <img src={cat.image} alt={cat.name} />
            <h4>{cat.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
