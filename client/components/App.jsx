/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import SignUpManager from './SignUpManager.jsx';
import LoginManager from './LoginManager.jsx';
import HomePage from './HomePage.jsx';


// defines App component and Routes to render specific component views
// uses react switch/routes to render different views

const App = () => {
  return (
    <div>
      <div className="title">WATCHST</div>
      <Switch>
        <Route exact path="/" component={LoginManager} />
        <Route path="/signup" component={SignUpManager} />
        <Route path="/homepage" component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
