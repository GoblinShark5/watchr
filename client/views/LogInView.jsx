/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import AuthTextView from '../components/AuthTextEntry';
import '../components/styles/LoginManager.css';

const LoginView = () => {
  const [error, setError] = useState('');

  const handleClick = (username, password) => {
    console.log(
      '%cLogin Initiated!',
      'font-weight: bold; font-size: 53px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
    );
    // fetch GET request from server
    // check our username and password against the login credentials
    fetch(`http://localhost:3000/user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
        setError('Username or Password not found in our database');
      });
  };

  return (
    <div id="login-container" className="loginManager">
      <AuthTextView handleClick={handleClick} error={error} />
    </div>
  );
};

export default LoginView;
