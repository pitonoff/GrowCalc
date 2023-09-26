import totalFert from './FertilizerCalculator';
import React from 'react';
import './Header.css'


const Header = ({ totalEnergyConsumption, totalEnergyCost, totalFertilizerCost }) => (
  <div>
    <h1>Overall Results</h1>
    <h4>{totalFert}</h4>
  </div>
);

export default Header;
