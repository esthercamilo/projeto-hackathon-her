// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Importe o arquivo de estilo CSS

const LandingPage = () => {
  const handleLoginClick = () => {
    // Aqui você pode adicionar lógica para redirecionar para a página de login
    console.log('Redirecionando para a página de login...');
  };

  return (
    <div className="landing-page">
      <Link to="/login">
        <button className="login-button" onClick={handleLoginClick}></button>
      </Link>
    </div>
  );
};

export default LandingPage;
