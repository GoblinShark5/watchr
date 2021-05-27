/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import './styles/LoginManager.css';

const LoginManager = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const errorSpan = <span>Please use valid username or password</span>;

  const handleClick = () => {
    console.log(
      '%cLogin Initiated!',
      'font-weight: bold; font-size: 53px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
    );

    // fetch GET request from server
    // check our username and password against the login credentials
    fetch(`http://localhost:3000/user?username=${username}&password=${password}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);

      })
      .catch(err => {
        console.log(err);
        setError('Username or Password not found in our database');
      });
  }

  return (
    <div id="login-container" className="loginManager">
      <div className="Login-Manager">
        <span id="signin-title">Log In</span>
        <div id="User-Name">
          Username:
          <input
            name="username"
            className="user"
            type="text"
            onChange={() => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div id="Pass-word">
          Password:
          <input
            name="password"
            className="Password"
            type="password"
            onChange={() => setPassword(e.target.value)}
            value={password}
          />
      </div>
      { error ? errorSpan : null }
      <button type="submit" className="Loginbutton" onClick={handleClick}>
        Log In
      </button>
      <br />
      <br />
      </div>
    </div>
  );
};

export default LoginManager;

/*
        <img
          className="imagine"
          src="https://i.ytimg.com/vi/xBasQG_6p40/maxresdefault.jpg"
          // src="https://pyxis.nymag.com/v1/imgs/018/9f3/7996faec0d5437015d516b3b4171602894-28-best-horror-films.2x.rhorizontal.w700.jpg"
          alt="movie reels"
        />
          <img
            className="stander"
            src="https://www.comingsoon.net/assets/styd/assets/uploads/2016/03/2000pos3.jpg"
            alt="Pan's Labyrinth"
          />
          <img
            className="stander2"
            src="https://upload.wikimedia.org/wikipedia/en/6/6d/Evil_Dead_II_poster.jpg"
            alt="Evil Dead II"
           />
*/
