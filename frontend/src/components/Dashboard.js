// Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Importe o arquivo de estilo CSS

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('missions'); // Estado para controlar a aba selecionada

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="dashboard">
      {/* Menu lateral esquerdo */}
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/dashboard/missions" onClick={() => handleTabChange('missions')}>
              Missões
            </Link>
          </li>
          <li>
            <Link to="/dashboard/performance" onClick={() => handleTabChange('performance')}>
              Desempenho
            </Link>
          </li>
          <li>
            <Link to="/dashboard/positions" onClick={() => handleTabChange('positions')}>
              Posições
            </Link>
          </li>
        </ul>
      </div>

      {/* Conteúdo principal */}
      <div className="main-content">
        {/* Texto em destaque com pontuação */}
        <div className="highlight">
          <h2>Minha Pontuação</h2>
          <p>1000 pontos</p>
        </div>

        {/* Abas */}
        <div className="tabs">
          <div className={`tab ${selectedTab === 'missions' && 'active'}`}>
            <h3>Missões</h3>
            {/* Conteúdo da aba Missões */}
          </div>
          <div className={`tab ${selectedTab === 'performance' && 'active'}`}>
            <h3>Desempenho</h3>
            {/* Conteúdo da aba Desempenho */}
          </div>
          <div className={`tab ${selectedTab === 'positions' && 'active'}`}>
            <h3>Posições</h3>
            {/* Conteúdo da aba Posições */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
