/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import StreamSelect from './StreamSelect.jsx';
import './styles/SignUpManager.css';

// Class component inherits from React.Component in order to
// use functionality (e.g. setState) present in React.Component
class SignUpManager extends React.Component {
  // Constructor method runs every time we render a *new* SignUpManager
  constructor() {
    super();
    // Initialize state of our component
    this.state = {
      newUser: '',
      newPassword: '',
      email: '',
      amazon: false,
      hulu: false,
      netflix: false,
    };

    // Bind method to * this * particular instance of SignUpManager
    this.handleOnChangeUser = this.handleOnChangeUser.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleStreamChange = this.handleStreamChange.bind(this);
  }

  handleStreamChange(e) {
    this.setState((prev) => {
      const { name } = e.target;
      const value = !prev[name];

      return {
        ...prev,
        [name]: value,
      };
    });
  }

  handleSubmitClick(e) {
    e.preventDefault();
    console.log(this.state);
  }

  // Handle input change, receives e argument if passed in as the
  // callback to onChange
  handleOnChangeUser(e) {
    // Set ONLY the "newUser" state by passing in an object containing
    // "newUser" as a property with the corresponding, updated value
    this.setState({
      newUser: e.target.value,
    });
  }

  handleOnChangePassword(e) {
    this.setState({
      newPassword: e.target.value,
    });
  }

  handleOnChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  // What you want to render on the webpage
  render() {
    // Return HTML/jsx elements
    // Must return a *single* element
    const streamInputs = [
      this.state.amazon,
      this.state.hulu,
      this.state.netflix,
    ];

    return (
      <div id="signup-container">
        <form id="signup-form">
          <div id="signup-email">
            Email:{' '}
            <input
              type="text"
              onChange={this.handleOnChangeEmail}
              value={this.state.email}
            />
          </div>
          <div id="signup-username">
            Username:{' '}
            <input
              type="text"
              onChange={this.handleOnChangeUser}
              value={this.state.newUser}
            />
          </div>
          <div id="signup-password">
            Password:{' '}
            <input
              type="text"
              onChange={this.handleOnChangePassword}
              value={this.state.newPassword}
            />
          </div>
          <StreamSelect
            streamPrefs={streamInputs}
            onStreamChange={this.handleStreamChange}
          />
          <button onClick={this.handleSubmitClick}> Sign Up </button>
        </form>
      </div>
    );
  }
}

// create more onclick synthetic event listeners
// button id
// action set to end point
// post method

export default SignUpManager;
