import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminPages.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/orders');
        setOrders(data);
      } catch (err) {
        console.error('Error fetching orders:', err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin-page">
      <h1>🧾 Order Management</h1>
      <table>
        <thead>
          <tr>
           <th>ID</th>
            <th>User</th>
            <th>Total Price</th>
            <th>Paid</th>
            <th>Paid At</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id.slice(-5)}</td>
                <td>{order.user?.name || 'Unknown'}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? '✅' : '❌'}</td>
                <td>{order.paidAt ? new Date(order.paidAt).toLocaleDateString() : 'N/A'}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
