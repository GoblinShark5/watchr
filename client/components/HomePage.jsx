import React from 'react';
import MovieInput from './MovieInput.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import './styles/HomePage.css';

const HomePage = () => (
  <div id="homepage-container">
    <MovieInput />
    <DisplayContainer />
  </div>
);

export default HomePage;
