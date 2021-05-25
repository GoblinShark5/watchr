/* eslint-disable react/prefer-stateless-function */
// renders movie display and stream display
import React from 'react';
import StreamsDisplay from './StreamsDisplay.jsx';
import './styles/DisplayContainer.css';

const DisplayContainer = ({ posterUrl, streams }) => (
  <div id="display-container">
    <img src={posterUrl} alt="movie" />
    <span>Streaming On</span>
    <StreamsDisplay streams={streams} />
  </div>
);

export default DisplayContainer;
