import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import PerformanceChart from './PerformanceChart';
import EmployeeList from './EmployeeList';
import EvaluationForm from './EvaluationForm';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <PerformanceChart />
          <EmployeeList />
          <EvaluationForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
