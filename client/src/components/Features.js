import React from 'react';
import '../styles/features.css';

const Features = () => {
  const data = [
    { icon: '🚚', title: 'Free Shipping' },
    { icon: '🔁', title: 'Free Returns' },
    { icon: '💳', title: '100% Payment Secure' },
    { icon: '📞', title: 'Support 24/7' }
  ];

  return (
    <div className="features">
      {data.map((item, idx) => (
        <div className="feature-item" key={idx}>
          <span className="feature-icon">{item.icon}</span>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
