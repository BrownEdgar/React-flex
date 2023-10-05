import React from 'react';
import useRandom from './useRandom';
import './App.css';

function App() {
  const randNumber = useRandom(10, 'number');
  const randLowLetter = useRandom(10, 'string', 'lower');
  const randUppLetter = useRandom(10, 'string', 'upper');

  return (
    <div className="container">
      <h1>Generator</h1>
      <div className="value-section">
        <p className="value-label">Numbers:</p>
        <p id="randNumber" className="random-value">{randNumber.join(', ')}</p>
      </div>
      <div className="value-section">
        <p className="value-label">Lowercase:</p>
        <p id="randLowLetter" className="random-value">{randLowLetter.join(', ')}</p>
      </div>
      <div className="value-section">
        <p className="value-label">Uppercase:</p>
        <p id="randUppLetter" className="random-value">{randUppLetter.join(', ')}</p>
      </div>
    </div>
  );
}

export default App;



