import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.email === email && storedUser?.password === password) {
      localStorage.setItem("loggedIn", "true");
      alert("Login successful!");
      navigate('/cart');
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        <p onClick={() => navigate('/signup')}>Don't have an account? Signup</p>
      </form>
    </div>
  );
};

export default Login;
