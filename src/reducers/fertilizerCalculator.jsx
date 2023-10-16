// reducers/fertilizerCalculator.js
const initialState = {
    totalFertilizerCost: 0,
  };
  
  const fertilizerCalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FERTILIZER_COST':
        return {
          ...state,
          totalFertilizerCost: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default fertilizerCalculatorReducer;
  