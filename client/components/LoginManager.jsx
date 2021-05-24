/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Redirect } from 'react-router-dom';
import './styles/LoginManager.css';

class LoginManager extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirect: '',
    };
    this.UserLoginHandler = this.UserLoginHandler.bind(this);
    this.PasswordLoginHandler = this.PasswordLoginHandler.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // eslint-disable-next-line consistent-return
  handleOnClick(e) {
    e.preventDefault();
    console.log('Login: ', this.state);

    if (this.state.username && this.state.password) {
      this.setState({
        redirect: '/homepage',
      });
    }
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
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div id="login-container">
        <form className="Login-Manager">
          Username:
          <input
            className="user"
            type="text"
            onChange={this.UserLoginHandler}
            value={this.state.username}
          />
          Password:
          <input
            className="Password"
            type="text"
            onChange={this.PasswordLoginHandler}
            value={this.state.password}
          />
          <br /> <br />
          <button className="Loginbutton" onClick={this.handleOnClick}>
            Log In
          </button>
        </form>
        <br /> <br />
        <img
          className="imagine"
          src="https://image.shutterstock.com/image-photo/reel-film-on-blackwhite-background-600w-426618697.jpg"
          alt="movie reels"
        />
      </div>
    );
  }
}
export default LoginManager;
