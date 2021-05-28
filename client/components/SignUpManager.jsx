/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import StreamSelect from './StreamSelect.jsx';
import { Button, TextField } from '@material-ui/core';

//creates the SignUpManager react component
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

  //check if user is logged in based on boolean in state property of 'isLoggedIn'
  //if logged in, renders homepage view
  useEffect( () => {
    if (isLoggedIn) history.push('/homepage');
  })

  //updates state to reflect which streaming services the user marks as services they have access to 
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

  //when user clicks 'submit' button, updates state to include all their inputs
  //submits fetch request to post new user to database and receives a response of 'logged in'
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

  //sets user input into state as user enters text for username
  const handleUserChange = (e) => {
    setNewUser(e.target.value);
  };

  //sets user input into state as user enters text for user password
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  //sets user input into state as user enters text for user email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const streamsInput = [streams.amazon, streams.hulu, streams.netflix];

  console.log(
    '%cSignup Initiated!',
    'font-weight: bold; font-size: 53px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
  );

  //render sign up form
  return (
    <center>
    <div id="signup-container">
      <form id="signup-form" onSubmit={handleSubmitClick} >
        <span id="signup-title">Create Account</span>
        <TextField id="username" name="email" value={email} onChange={handleEmailChange} label="Email" variant="filled" color="secondary" autoComplete="off" />
        <TextField id="username" name="username" value={username} onChange={handleUserChange} label="Username" variant="filled" color="secondary" autoComplete="off" />
        <TextField id="password" name="password" value={password} onChange={handlePasswordChange} label="Password" variant="filled" color="secondary" type="password" />
        <StreamSelect
          streamPrefs={streamsInput}
          onStreamChange={handleStreamChange}
        />
        <Button variant="contained" type="submit" color="secondary" id="login">Sign Up</Button>
        <Link to="/homepage"></Link>
      </form>
    </div>
    </center>
  );
};


export default SignUpManager;
