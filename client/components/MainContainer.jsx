/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import SignUpManager from './SignUpManager.jsx';
import MovieInput from './MovieInput.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import LoginManager from './LoginManager.jsx';

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <LoginManager />
        <SignUpManager />
        <MovieInput />
        <DisplayContainer />
      </div>
    );
  }
}

export default MainContainer;
