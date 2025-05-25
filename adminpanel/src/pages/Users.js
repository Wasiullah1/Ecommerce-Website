import React, { useState, useEffect} from 'react';
import '../styles/AdminPages.css';

const Users = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users', {
          credentials: 'include',
        });
        const data = await res.json();
        console.log('Fetched users:', data);
        setUsers(data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };
    fetchUsers();
  }, []);
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
          {Array.isArray(users) && users.map((user) => (
            <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>✅</td>
            {/* <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td> */}
          </tr>
          ))}
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
