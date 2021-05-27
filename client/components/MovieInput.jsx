/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const MovieInput = (props) => {

  const [movieInput, setMovieInput] = useState('');

  function handleOnMovieChange(e) {
    setMovieInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/search', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        search: movieInput,
      }),
    })
      .then((res) => res.json())
      .then((data) => props.onResponse(data))
  }

  return (
    <div id="movie-input-container">
      <div id="movie-input-title">Where to stream</div>
      <form id="movie-input" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleOnMovieChange}
          value={movieInput}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default MovieInput;
