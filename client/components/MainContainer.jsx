/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpManager from './SignUpManager.jsx';
import LoginManager from './LoginManager.jsx';
import HomePage from './HomePage.jsx';

class MainContainer extends React.Component {
  render() {
    // console.log(document.cookie)
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginManager} />
          <Route path="/signup" component={SignUpManager} />
          <Route path="/homepage" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
