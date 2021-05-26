/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';

ReactDOM.render(
  <BrowserRouter>
    <MainContainer />
  </BrowserRouter>,
  document.getElementById('root'));
