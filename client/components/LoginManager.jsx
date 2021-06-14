/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';


//creates LoginManager component to handle logging in
const LoginManager = () => {
  console.log(
    '%cLogin Initiated!',
    'font-weight: bold; font-size: 53px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
  );

  //react hooks to create initial state and create associated variables used to update state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState('');

  // assign a variable to store the history object
  let history = useHistory();

  // when the component re-renders, check if the isLoggedIn is truthy and push
  // homepage endpoint so the route can render the proper page
  useEffect( () => {
    if (isLoggedIn) history.push('/homepage');
  })

  //updates state when user enters username as login input
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  //updates state when user enters password as login input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //when the login form is submitted, sends a post request containing inputted username and password
  //if successful, updates 'is logged in' to true in state
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      }),
    })
      .then((res) => {
        console.log('RES: ', res);
        return res.json();
      })
      .then((data) => {
        console.log(data.loggedIn)
        setIsLoggedIn(data)
      })
      .catch((err) => setLoginFailed('Incorrect Username/Password'));
  };

  //when 'submit' button is pushed, invokes handleSubmit function 
  //renders button to redirect to 'sign up' page if current user account doesn't exist
  return (
    <center>
    <div id="login-container">
      <form onSubmit={handleSubmit}>
        <TextField id="username" name="username" value={username} onChange={handleUsernameChange} label="Username" variant="filled" color="secondary" autoComplete="off" />
        {/* <input placeholder="username" name="username" value={username} className="inputField" type="text" onChange={handleUsernameChange} /> */}
        <br/>
        <br/>
        <TextField id="password" name="password" value={password} onChange={handlePasswordChange} label="Password" variant="filled" color="secondary" type="password" />
        <br /> 
        <p id='loginFailed'>{loginFailed}</p>
        <Button variant="contained" type="submit" color="secondary" id="login">Log In</Button>
        <br/>
        <Link to="signup">
          <Button type="submit" color="primary" id="signup">Sign Up</Button>
        </Link>
      </form>
    </div>
    </center>
  );
};

export default LoginManager;
