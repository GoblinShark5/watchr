/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import { Redirect } from 'react-router-dom';
import './styles/LoginManager.css';

// class LoginManager extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       username: '',
//       password: '',
//       redirect: '',
//     };
//     this.UserLoginHandler = this.UserLoginHandler.bind(this);
//     this.PasswordLoginHandler = this.PasswordLoginHandler.bind(this);
//     this.handleOnClick = this.handleOnClick.bind(this);
//   }

//   // eslint-disable-next-line consistent-return
//   handleOnClick(e) {
//     e.preventDefault();
//     console.log('Login: ', this.state);

//     if (this.state.username && this.state.password) {
//       this.setState({
//         redirect: '/homepage',
//       });
//     }
//   }

//   UserLoginHandler(e) {
//     this.setState({
//       username: e.target.value,
//     });
//   }

//   PasswordLoginHandler(e) {
//     this.setState({
//       password: e.target.value,
//     });
//   }

//   render() {
//     if (this.state.redirect) {
//       return <Redirect to={this.state.redirect} />;
//     }

//     return (
//       <div id="login-container">
//         <form className="Login-Manager">
//           Username:
//           <input
//             className="user"
//             type="text"
//             onChange={this.UserLoginHandler}
//             value={this.state.username}
//           />
//           Password:
//           <input
//             className="Password"
//             type="text"
//             onChange={this.PasswordLoginHandler}
//             value={this.state.password}
//           />
//           <button onClick={this.handleOnClick}>Log In</button>
//         </form>
//       </div>
//     );
//   }
// }

const LoginManager = () => {
  console.log(
    '%cLogin Initiated!',
    'font-weight: bold; font-size: 53px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
  );

  return (
    <div id="login-container">
      <form method="POST" action="/login" className="Login-Manager">
        Username:
        <input
          className="user"
          name="username"
          className="user"
          type="text"
          required
        />
        Password:
        <input
          className="Password"
          name="password"
          className="Password"
          type="password"
        />
        <br /> <br />
        <button className="Loginbutton" type="submit" value="Login User ">
          Log In
        </button>
      </form>
    </div>
  );
};

/*
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
          src="https://i.ytimg.com/vi/xBasQG_6p40/maxresdefault.jpg"
          // src="https://pyxis.nymag.com/v1/imgs/018/9f3/7996faec0d5437015d516b3b4171602894-28-best-horror-films.2x.rhorizontal.w700.jpg"
          alt="movie reels"
        />
        <CSSTransition
          in={true}
          appear={true}
          timeout={300}
          classNames={stander1Class}
        >
          <img
            className={stander1Class}
            src="https://www.comingsoon.net/assets/styd/assets/uploads/2016/03/2000pos3.jpg"
            alt="Pan's Labyrinth"
          />
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={300}
          classNames={stander2Class}
        >
          <img
            className={stander2Class}
            src="https://upload.wikimedia.org/wikipedia/en/6/6d/Evil_Dead_II_poster.jpg"
            alt="Evil Dead II"
          />
        </CSSTransition>
      </div>
    );
  }
}
*/

export default LoginManager;
