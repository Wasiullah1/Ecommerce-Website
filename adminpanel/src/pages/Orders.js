import React from 'react';
import '../styles/AdminPages.css';

const Orders = () => {
  return (
    <div className="admin-page">
      <h1>🧾 Order Management</h1>
      <table>
        <thead>
          <tr>
            <th>Order #</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1234</td>
            <td>Jane Smith</td>
            <td>$54.99</td>
            <td>Delivered</td>
            <td>2025-05-20</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
