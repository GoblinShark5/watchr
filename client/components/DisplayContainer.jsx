/* eslint-disable react/prefer-stateless-function */
// renders movie display and stream display
import React from 'react';
import StreamsDisplay from './StreamsDisplay.jsx';
import './styles/DisplayContainer.css';

class DisplayContainer extends React.Component {
  render() {
    return (
      <div id="display-container">
        Movie / Streams Display
        <img
          src="https://image.tmdb.org/t/p/w342/1qELdgcbbDjlpDDRwdYTl2MzuVu.jpg"
          alt="movie"
        />
        <StreamsDisplay />
      </div>
    );
  }
}

export default DisplayContainer;
