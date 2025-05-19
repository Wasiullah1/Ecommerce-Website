import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>🛍️ Admin Panel</h2>
        <ul>
          <li>📊 Dashboard</li>
          <li>📦 Products</li>
          <li>🧾 Orders</li>
          <li>👥 Users</li>
          <li>🚪 Logout</li>
        </ul>
      </aside>

      <div className="main-content">
        <header className="dashboard-header">
          <h1>Welcome, Admin</h1>
        </header>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>📦 Total Products</h3>
            <p>120</p>
          </div>
          <div className="stat-card">
            <h3>🧾 Total Orders</h3>
            <p>75</p>
          </div>
          <div className="stat-card">
            <h3>👥 Total Users</h3>
            <p>34</p>
          </div>
        </div>

        <section className="dashboard-lists">
          <div className="dashboard-section">
            <h2>Recent Orders</h2>
            <ul className="list">
              <li>Order #1234 - $54.99</li>
              <li>Order #1233 - $23.00</li>
              <li>Order #1232 - $89.10</li>
            </ul>
          </div>

          <div className="dashboard-section">
            <h2>Top Products</h2>
            <ul className="list">
              <li>🍔 Zinger Burger - 320 sold</li>
              <li>🥤 Cold Drink - 290 sold</li>
              <li>🍕 Pizza Slice - 250 sold</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
