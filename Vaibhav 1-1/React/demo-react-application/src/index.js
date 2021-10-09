import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FunctionalComponent from './FunctionalComponent';
import reportWebVitals from './reportWebVitals';

const myName = "Akshay Khurana";

ReactDOM.render(
  <React.StrictMode>
    <FunctionalComponent name={myName} />
    <FunctionalComponent name="Vaibhav Tayade" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
