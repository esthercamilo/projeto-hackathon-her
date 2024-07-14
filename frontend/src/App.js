// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="missions" element={<div>Conteúdo das Missões</div>} />
            <Route path="performance" element={<div>Conteúdo do Desempenho</div>} />
            <Route path="positions" element={<div>Conteúdo das Posições</div>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
