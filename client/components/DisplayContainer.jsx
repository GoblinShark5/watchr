/* eslint-disable react/prefer-stateless-function */
// renders movie display and stream display
import React from 'react';
import StreamsDisplay from './StreamsDisplay.jsx';
import './styles/DisplayContainer.css';

const DisplayContainer = ({ posterUrl, streams }) => (
  <div id="display-container">
    <span>Available To Stream On:</span>
    <StreamsDisplay streams={streams} />
    <img id= "movieImg" src={posterUrl} alt="movie" />
  </div>
);

export default DisplayContainer;
