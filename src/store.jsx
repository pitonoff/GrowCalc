import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; // Import your rootReducer
import React from 'react';

const store = createStore(rootReducer);

const StoreProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default StoreProvider;