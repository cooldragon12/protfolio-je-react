import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';
import {Hamburger} from './utilityComponents';
import {Page2, Page1} from './appFront'

ReactDOM.render(
  <React.StrictMode>
    <Hamburger/>
    <Page1 />
    <Page2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
