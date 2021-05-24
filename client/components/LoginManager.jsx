/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class LoginManager extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.UserLoginHandler = this.UserLoginHandler.bind(this);
    this.PasswordLoginHandler = this.PasswordLoginHandler.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    console.log('Login: ', this.state);
  }

  UserLoginHandler(e) {
    this.setState({
      username: e.target.value,
    });
  }

  PasswordLoginHandler(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    return (
      <form>
        Username:
        <input
          type="text"
          onChange={this.UserLoginHandler}
          value={this.state.username}
        />
        Password:
        <input
          type="text"
          onChange={this.PasswordLoginHandler}
          value={this.state.password}
        />
        <button onClick={this.handleOnClick}>Log In</button>
      </form>
    );
  }
}
export default LoginManager;
