import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
document.getElementById('root'));
