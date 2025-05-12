import React from 'react';
import '../styles/topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">📞 +1 401-223-357</div>
      <div className="topbar-center">Free shipping on orders $49+</div>
      <div className="topbar-right">Support | Track Order</div>
    </div>
  );
};

export default Topbar;
