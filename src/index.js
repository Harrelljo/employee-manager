import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Removed the following two lines as the files are missing
// import './index.css';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to keep performance monitoring, you can ignore this line
// reportWebVitals();
