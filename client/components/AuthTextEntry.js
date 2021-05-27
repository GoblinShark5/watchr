/* eslint-disable linebreak-style */
import React, { useState } from 'react';

const AuthTextEntry = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const errorSpan = <span>Please use valid username or password</span>;

  const handleClick = () => {
    props.handleClick(username, password);
  };
   
  return (
    <div className="Login-Manager">
      <span id="signin-title">Log In</span>
      <div id="User-Name">
        Username:
          <input
            name="username"
            className="user"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
      </div>
      <div id="Pass-word">
        Password:
          <input
            name="password"
            className="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      { props.error ? errorSpan : null}
      <button type="submit" className="Loginbutton" onClick={handleClick}>
        Log In
      </button>
      <br />
      <br />
    </div>
  );
}

export default AuthTextEntry;