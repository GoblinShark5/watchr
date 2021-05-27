/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './styles/MovieInput.css';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInput: '',
    };
    this.handleOnMovieChange = this.handleOnMovieChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnMovieChange(e) {
    this.setState({
      movieInput: e.target.value,
    });
  }

  handleSubmit() {
    fetch('/movie/search', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        search: this.state.movieInput,
      }),
    })
      .then((res) => res.json())
      .then((data) => this.props.onResponse(data));
  }

  render() {
    return (
      <div id="movie-input-container">
        <div id="movie-input-title">Where to stream</div>
        <div id="movie-input">
          <input
            type="text"
            onChange={this.handleOnMovieChange}
            value={this.state.movieInput}
          />
          <button onClick={this.handleSubmit}>Search</button>
        </div>
      </div>
    );
  }
}

export default MovieInput;
