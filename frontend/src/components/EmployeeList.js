import React from 'react';
import './EmployeeList.css';

const EmployeeList = () => {
  const employees = [
    { name: 'Alice', performance: 'Excellent' },
    { name: 'Bob', performance: 'Good' },
    { name: 'Charlie', performance: 'Average' },
  ];

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee.name} - {employee.performance}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
