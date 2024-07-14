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

    </div>
  );
};

export default Dashboard;
