// actions.js
export const updateEnergyCost = (totalEnergyCost) => {
    return {
      type: 'UPDATE_ENERGY_COST',
      payload: totalEnergyCost,
    };
  };
  
  export const updateFertilizerCost = (totalFertilizerCost) => {
    return {
      type: 'UPDATE_FERTILIZER_COST',
      payload: totalFertilizerCost,
    };
  };
  