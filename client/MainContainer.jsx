/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage.jsx';
// import NavBar from './components/NavBar';

import FavoritesView from './views/FavoritesView.jsx';
import HomeView from './views/HomeView.jsx';
import LoginView from './views/LogInView.jsx';
import SignUpView from './views/SignUpView.jsx';
// import './styles/StreamSelect.css';

import './components/styles/MainContainer.css';

// React Router Documentation
// https://www.npmjs.com/package/react-router

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //current: 'signup',
      loggedIn: false
    };

    // this.views = {
    //   'login': <LoginView />,
    //   'signup': <SignUpView />,
    //   'home': <HomePage />,
    //   'favorites': <FavoritesView />
    // };

  }

  toggleCurrent = (value) => {
    this.setState({ current: value });
  }

  render() {
    return (
      <div>
        {/* -- NavBar here -- */}
        {/* <button onClick={() => this.toggleCurrent('login')} >Log In</button>
        <button onClick={() => this.toggleCurrent('signup')} >Sign Up</button>
        <button onClick={() => this.toggleCurrent('home')} >Home</button>
        {this.views[this.state.current]} */}

        <Router>
          <div>
            <Route path="/" component={LoginView} exact />
            <nav>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/home">Home</Link>
            </nav>
            <Route path="/login" component={LoginView} />
            <Route path="/signup" component={SignUpView} />
            <Route path="/home" component={HomePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default MainContainer;
