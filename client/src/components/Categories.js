import React from 'react';
import '../styles/categories.css';

const Categories = () => {
  const cats = ['Snacks', 'Drinks', 'Sauces', 'Instant Food'];

  return (
    <section className="categories">
      <h2>Popular Categories</h2>
      <div className="cat-list">
        {cats.map((cat, idx) => (
          <div className="cat-item" key={idx}>{cat}</div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
