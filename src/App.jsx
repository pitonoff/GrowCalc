import React, { useState } from 'react';
import EnergyCalculator from './Components/EnergyCalculator';
import FertilizerCalculator from './Components/FertilizerCalculator';
import './App.css';

function App() {
  return (
    <div className='App'>
    <FertilizerCalculator />
    <EnergyCalculator />
    </div>
  );
};

export default App;
