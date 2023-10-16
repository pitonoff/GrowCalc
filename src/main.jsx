import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import StoreProvider from "./store"; // Correct path to store.js


ReactDOM.render(
<StoreProvider>
  <App />
  </StoreProvider>,
  document.getElementById('root'));


  