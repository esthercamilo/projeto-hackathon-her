// src/components/LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Importe o arquivo de estilo CSS
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulando autenticação simples
    if (username && password) {
      // Redirecionar para o dashboard após o login
      navigate('/dashboard');
    }
  };

  return (
  <div className="login-form">
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <input className="login_input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input className="login_input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="login_button" type="submit"></button>
      </form>
    </div>
  </div>
  );
};

export default LoginForm;
