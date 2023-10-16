// reducers/index.js
import { combineReducers } from 'redux';
import energyCalculatorReducer from './energyCalculator';
import fertilizerCalculatorReducer from './fertilizerCalculator';

const rootReducer = combineReducers({
  energyCalculator: energyCalculatorReducer,
  fertilizerCalculator: fertilizerCalculatorReducer,
});

export default rootReducer;
