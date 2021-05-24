/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './styles/MovieInputStyles.css';

class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInput: '',
    };
    this.handleOnMovieChange = this.handleOnMovieChange.bind(this);
  }

  handleOnMovieChange(e) {
    this.setState({
      movieInput: e.target.value,
    });
  }

  render() {
    return (
      <div id="signup-container">
        <div id="movie-input-title">Where Can I Stream</div>
        <input
          type="text"
          onChange={this.handleOnMovieChange}
          value={this.state.movieInput}
        />
        <button>Search</button>
      </div>
    );
  }
}

export default MovieInput;
