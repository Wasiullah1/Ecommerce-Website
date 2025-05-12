import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = e => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("All fields are required.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({username, email, password }));
    alert("Signup successful!");
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
        <p onClick={() => navigate('/login')}>Already have an account? Login</p>
      </form>
    </div>
  );
};

export default Signup;
