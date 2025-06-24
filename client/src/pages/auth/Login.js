import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import axios from 'axios';
import loginContext from '../../context/login-context';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // State to handle error messages
  const navigate = useNavigate();
  const loginCtx = useContext(loginContext)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const token = await loginCtx.userLoginHandler(email, password);
    setLoading(false);
    if (token) {
      navigate("/");
    } else {
      setError("Login failed");
    }
  };

  return (
    <div className="auth-bg">
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        {loginCtx.username && <p>{loginCtx.username}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p onClick={() => navigate('/signup')} className="signup-link">
          Don't have an account? Signup
        </p>
        <span></span>
        <p onClick={() => navigate('/forgot-password')} className="signup-link">
          Forgot Password?
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;