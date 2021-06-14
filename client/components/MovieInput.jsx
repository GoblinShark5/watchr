/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

//create MovieInput react component which acts as searchbar for looking up movies
const MovieInput = (props) => {

  const [movieInput, setMovieInput] = useState('');

  //updates state to reflect user input as it is entered
  function handleOnMovieChange(e) {
    setMovieInput(e.target.value);
  }

  //when user submits search term, sends a post request to retrieve availability of movie from each streaming service
  //and retrieves movie poster
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
        <TextField label="Search titles" type="text" onChange={handleOnMovieChange} color="secondary" value={movieInput}/>
        <Button variant="contained" type="submit" color="secondary" id="login">Search</Button>
      </form>
    </div>
  );
}

export default MovieInput;
