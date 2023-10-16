// reducers/energyCalculator.js
const initialState = {
    totalEnergyCost: 0,
  };
  
  const energyCalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_ENERGY_COST':
        return {
          ...state,
          totalEnergyCost: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default energyCalculatorReducer;
  