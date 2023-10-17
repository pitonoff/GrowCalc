// TotalCostDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const TotalCostDisplay = () => {
  const totalEnergyCost = useSelector((state) => state.energyCalculator.totalEnergyCost);
  const totalFertilizerCost = useSelector((state) => state.fertilizerCalculator.totalFertilizerCost);
  const totalCost = totalEnergyCost + totalFertilizerCost; 

  return (
    <div>
      <h3>Total Energy Cost: GEL {totalEnergyCost.toFixed(2)}</h3>
      <h3>Total Fertilizer Cost: GEL {totalFertilizerCost.toFixed(2)}</h3>
      <h2>Total Grow Expenses: GEL {totalCost.toFixed(2)} </h2>
    </div>
  );
};

export default TotalCostDisplay;
