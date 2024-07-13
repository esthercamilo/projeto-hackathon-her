// src/components/EvaluationList.js

import React from "react";

const EvaluationList = ({ evaluations }) => {
  return (
    <div>
      <h2>Evaluation List</h2>
      <ul>
        {evaluations.map((evaluation) => (
          <li key={evaluation.id}>
            <strong>{evaluation.name}</strong>: {evaluation.performance} - {evaluation.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EvaluationList;
