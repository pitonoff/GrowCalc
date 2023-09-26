import React, { useState } from 'react';
import EnergyCalculator from './Components/EnergyCalculator';
import FertilizerCalculator from './Components/FertilizerCalculator';
import InfoBlock from './Components/InfoBlock';
import './App.css';

function App() {
  return (
    <div className='App'>
    <FertilizerCalculator />
    <EnergyCalculator />
    <InfoBlock />
    </div>
  );
};

export default App;
