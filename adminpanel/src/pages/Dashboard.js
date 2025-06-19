import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({  
  totalProducts: 0,
  totalUsers: 0,
  totalOrders: 0  
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/admin/dashboard');
        setRecentOrders(data.recentOrders);
        setTopProducts(data.topProducts);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);
  useEffect(() => {
    const checkAuth = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/verify', {
        method: 'GET',
        credentials: 'include',
      });

      if (!res.ok) {
        navigate('/'); // Not authenticated, redirect to login
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      navigate('/'); // Redirect if error
    }
  };

  checkAuth();
}, [navigate]);

useEffect(() => {
  const fetchStats = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/admin/stats');
      setStats(data); // now contains totalProducts, totalUsers, totalOrders
    } catch (err) {
      console.error('Failed to load stats', err);
    }
  };

  fetchStats();
}, []);
  
  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        navigate('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>🛍️ Admin Panel</h2>
        <ul>
          <li>📊 Dashboard</li>
          <li onClick={() => navigate('/products')}>📦 Products</li>
          <li onClick={() => navigate('/orders')}>🧾 Orders</li>
          <li onClick={() => navigate('/users')}>👥 Users</li>
          <li onClick={() => navigate('/add-product')}>📦 Add Products</li>
          <li onClick={handleLogout} style={{ cursor: 'pointer'}}>
            🚪 Logout
          </li>
        </ul>
      </aside>

      <div className="main-content">
        <header className="dashboard-header">
          <h1>Welcome, Admin</h1>
        </header>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>📦 Total Products</h3>
            <p>{stats.totalProducts}</p>
          </div>
          <div className="stat-card">
            <h3>🧾 Total Orders</h3>
            <p>{stats.totalOrders}</p>
          </div>
          <div className="stat-card">
            <h3>👥 Total Users</h3>
            <p>{stats.totalUsers}</p>
          </div>
        </div>

        <section className="dashboard-lists">
          <div className="dashboard-section">
            <h2>Recent Orders</h2>
            <ul className="list">
              {recentOrders.length > 0 ? (
                recentOrders.map((order) => (
                  <li key={order._id}>
                    Order #{order._id.slice(-4)} - ${order.totalPrice}
                  </li>
                ))
              ) : (
                  <li>No recent orders</li>
                )}
            </ul>
          </div>

          <div className="dashboard-section">
            <h2>Top Products</h2>
            <ul className="list">
              {topProducts.length > 0 ? (
                topProducts.map((product) => (
                  <li key={product._id}>
                    {product.name} - ⭐ {product.rating}
                  </li>
                ))
              ) : (
                  <li>No top products yet</li>
            )}
          </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
