import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';
import './style/navBar.css';
// import App from './final/App';

setTimeout(() => {

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

}, 1111);