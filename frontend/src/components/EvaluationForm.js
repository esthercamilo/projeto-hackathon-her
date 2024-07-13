import React from 'react';
import './EvaluationForm.css';

const EvaluationForm = () => {
  return (
    <div className="evaluation-form">
      <h2>Evaluation Form</h2>
      <form>
        <label>
          Employee Name:
          <input type="text" name="name" />
        </label>
        <label>
          Performance:
          <select name="performance">
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EvaluationForm;
