// src/LandingPage.js
import React from 'react';
import SymptomInput from './SymptomInput';

const LandingPage = () => {
  const [showSymptomInput, setShowSymptomInput] = React.useState(false);

  const handlePredictDisease = () => {
    setShowSymptomInput(true);
  };

  return (
    <div>
      {showSymptomInput ? (
        <SymptomInput />
      ) : (
        <div>
          <h1>DocHelp</h1>
          <button onClick={handlePredictDisease}>Predict Disease</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;