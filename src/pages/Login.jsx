// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://dashboard-backend-rwbu.onrender.com/api/auth/login', { email, password });
      alert('Login Successful!');
      navigate('/dashboard'); // redirect
    } catch (err) {
      alert('Login Failed!');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form 
        className="p-5 shadow rounded bg-light" 
        style={{ width: '400px' }} 
        onSubmit={handleLogin}
      >
        <h2 className="mb-4 text-center">Admin Login</h2>
        <div className="mb-3">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
