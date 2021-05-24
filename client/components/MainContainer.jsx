/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import SignUpManager from './SignUpManager.jsx';
import MovieInput from './MovieInput.jsx';
import DisplayContainer from './DisplayContainer.jsx';

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <SignUpManager />
        <MovieInput />
        <DisplayContainer />
      </div>
    );
  }
}

export default MainContainer;
