/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
// transition from class to function
const LoginManager = () => {
  console.log(
    '%cLogin Initiated!',
    'font-weight: bold; font-size: 53px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
  );

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let history = useHistory();

  useEffect( () => {
    if (isLoggedIn) history.push('/homepage');
  }
  )

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

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
      .catch((err) => console.log('Err received in fetch: ', err));
  };

  return (
    <div id="login-container">
      <form onSubmit={handleSubmit}>
        Username:
        <input name="username" value={username} className="user" type="text" onChange={handleUsernameChange} />
        Password:
        <input name="password" value={password} className="password" type="password" onChange={handlePasswordChange}/>
        <br /> <br />
        <button type="submit" className="Loginbutton">
          Log In
        </button>
        <Link to="/homepage">
          <button>To Home Page</button>
        </Link>
        <Link to="signup">
          <button>Sign Up</button>
        </Link>
      </form>
      <br /> <br />
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
    </div>
  );
};

export default LoginManager;
