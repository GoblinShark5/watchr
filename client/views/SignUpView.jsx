/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import StreamSelect from '../components/StreamSelect.jsx';
import '../components/styles/SignUpManager.css';

const SignUpManager = () => {
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [streams, setStreams] = useState({
    amazon: false,
    hulu: false,
    netflix: false,
  });

  const handleStreamChange = (e) => {
    setStreams((prev) => {
      const { name } = e.target;
      const value = !prev[name];

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log('Clicked submit on SignUp');

    fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newUser,
        newPassword,
        email,
        amazon: streams.amazon,
        hulu: streams.hulu,
        netflix: streams.netflix,
      }),
    })
      .then((res) => {
        console.log('RES: ', res);
        return res.json()
      })
      .then((data) => console.log('Data received: ', data))
      .catch((err) => console.log('Err received in fetch: ', err));
  };

  // Handle input change, receives e argument if passed in as the
  // callback to onChange
  const handleUserChange = (e) => {
    // Set ONLY the "newUser" state by passing in an object containing
    // "newUser" as a property with the corresponding, updated value
    setNewUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const streamsInput = [streams.amazon, streams.hulu, streams.netflix];

  console.log(
    '%cSignup Initiated!',
    'font-weight: bold; font-size: 53px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
  );
  return (
    <div id="signup-container">
      <form id="signup-form" method="POST" action="/signup">
        <span id="signup-title">Create Account</span>
        <div id="signup-email">
          Email:{' '}
          <input name="email" type="email" onChange={handleEmailChange} value={email} />
        </div>
        <div id="signup-username">
          Username:{' '}
          <input name="username" type="text" onChange={handleUserChange} value={newUser} />
        </div>
        <div id="signup-password">
          Password:{' '}
          <input
            name="password"
            type="password"
            onChange={handlePasswordChange}
            value={newPassword}
          />
        </div>
        <StreamSelect
          streamPrefs={[streamsInput]}
          onStreamChange={handleStreamChange}
        />
        <button type="submit" onClick={handleSubmitClick}> Sign Up </button>
      </form>
    </div>
  );
};
export default SignUpManager;

/*
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
          <span id="signup-title">Create Account</span>
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
*/
