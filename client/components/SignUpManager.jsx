/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import StreamSelect from './StreamSelect.jsx';

const SignUpManager = () => {
  const [username, setNewUser] = useState('');
  const [password, setNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [streams, setStreams] = useState({
    amazon: false,
    hulu: false,
    netflix: false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let history = useHistory();

  useEffect( () => {
    if (isLoggedIn) history.push('/homepage');
  })

  /*
  this.state = {
    newUser: '',
    newPassword: ''
    email: '',
    streams: {
      amazon: false,
      hulu: false,
      netflix: false,
    }
  }

  this.setState({
    ...
    newUser: 'asdf'
  })
  setNewUser('asdf');
  */

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

    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
        amazon: streams.amazon,
        hulu: streams.hulu,
        netflix: streams.netflix,
      }),
    })
      .then((res) => {
        console.log('RES: ', res);
        return res.json();
      })
      .then((data) => {
        console.log('data', data)
        setIsLoggedIn(data.loggedIn)
      })
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
      <form id="signup-form" onSubmit={handleSubmitClick} >
        <span id="signup-title">Create Account</span>
        <div id="signup-email">
          Email:{' '}
          <input
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div id="signup-username">
          Username:{' '}
          <input
            name="username"
            type="text"
            onChange={handleUserChange}
            value={username}
          />
        </div>
        <div id="signup-password">
          Password:{' '}
          <input
            name="password"
            type="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <StreamSelect
          streamPrefs={[streamsInput]}
          onStreamChange={handleStreamChange}
        />
        <button type="submit" onClick={handleSubmitClick}>
          {' '}
          Sign Up{' '}
        </button>
        <Link to="/homepage"></Link>
      </form>
    </div>
  );
};
export default SignUpManager;
