/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

const MovieInput = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     movieInput: '',
  //   };
  //   this.handleOnMovieChange = this.handleOnMovieChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  const [movieInput, setMovieInput] = useState('');

  function handleOnMovieChange(e) {
    setMovieInput(e.target.value);
  }

  function handleSubmit() {
    fetch('/search', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        search: this.state.movieInput,
      }),
    })
      .then((res) => res.json())
      .then((data) => props.onResponse(data));
  }

  return (
    <div id="movie-input-container">
      <div id="movie-input-title">Where to stream</div>
      <div id="movie-input">
        <input
          type="text"
          onChange={handleOnMovieChange}
          value={movieInput}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default MovieInput;
