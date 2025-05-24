import React from 'react';
import '../styles/AdminPages.css';

const Users = () => {
  return (
    <div className="admin-page">
      <h1>👥 User Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wasiullah</td>
            <td>wasi@example.com</td>
            <td>✅</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
