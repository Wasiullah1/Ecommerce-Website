import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // State to handle error messages

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Clear any previous errors

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/users/login',
        { email, password },
        { withCredentials: true }
      );
      // localStorage.setItem('userInfo', JSON.stringify(data)); // Store user info
      if (data && data._id) {
        navigate(`/user/${data._id}`);
      } else {
        alert('Unexpected login response');
      } // Redirect to the home page
    } catch (error) {
      setError(error?.response?.data?.message || 'Login failed'); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
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
      </form>
    </div>
  );
};

export default Login;