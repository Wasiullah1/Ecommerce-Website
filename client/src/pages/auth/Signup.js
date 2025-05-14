import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:5000/api/users/register', { name: username, email, password }, { withCredentials: true });
      // localStorage.setItem('userInfo', JSON.stringify(data));

    data && navigate('/login')
    // console.log(data)

  } catch (error) {
    error && error.message && console.log('Signup Error:', error);
    // alert(error?.response?.data?.message || 'Signup failed. Please try again.');
  }};

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button>Signup</button>
        <p onClick={() => navigate('/login')}>Already have an account? Login</p>
      </form>
    </div>
  );
};

export default Signup;
