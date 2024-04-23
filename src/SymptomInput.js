// src/SymptomInput.js
import React, { useState } from 'react';

const SymptomInput = () => {
  const [symptoms, setSymptoms] = useState(['', '', '', '', '']);

  const handleSymptomChange = (e, index) => {
    const updatedSymptoms = [...symptoms];
    updatedSymptoms[index] = e.target.value;
    setSymptoms(updatedSymptoms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can call a function or send the symptoms data to the back-end
    // for symptom analysis and doctor recommendation
    console.log('Submitted symptoms:', symptoms);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter your symptoms</h2>
      {symptoms.map((symptom, index) => (
        <div key={index}>
          <label htmlFor={`symptom-${index}`}>Symptom {index + 1}</label>
          <input
            type="text"
            id={`symptom-${index}`}
            value={symptom}
            onChange={(e) => handleSymptomChange(e, index)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SymptomInput;