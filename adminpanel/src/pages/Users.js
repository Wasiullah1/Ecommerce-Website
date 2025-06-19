import React, { useState, useEffect} from 'react';
import '../styles/AdminPages.css';
import axios from 'axios';

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
  const handleDelete = async (id) => {
  if (!window.confirm('Are you sure you want to delete this user?')) return;
  try {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    setUsers(users.filter((u) => u._id !== id));
  } catch (err) {
    alert('Failed to delete user');
  }
};

const handleEdit = (user) => {
  const newName = prompt('Enter new name', user.name);
  const newEmail = prompt('Enter new email', user.email);
  if (newName && newEmail) {
    axios.put(`http://localhost:5000/api/users/${user._id}`, {
      name: newName,
      email: newEmail,
    })
    .then((res) => {
      setUsers(users.map((u) => (u._id === user._id ? res.data : u)));
    })
    .catch(() => alert('Failed to update user'));
  }
};

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
            <td>
              <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(user._id)}>Delete</button>
            </td>
          </tr>
          ))}
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
