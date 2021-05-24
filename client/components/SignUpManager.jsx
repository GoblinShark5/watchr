/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

// Class component inherits from React.Component in order to
// use functionality (e.g. setState) present in React.Component
// class SignUpManager extends React.Component {
//   // Constructor method runs every time we render a *new* SignUpManager
//   constructor() {
//     super();
//     // Initialize state of our component
//     this.state = {
//       newUser: '',
//       newPassword: '',
//       email: '',
//     };

//     // Bind method to * this * particular instance of SignUpManager
//     this.handleOnChangeUser = this.handleOnChangeUser.bind(this);
//     this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
//     this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // Handle input change, receives e argument if passed in as the
//   // callback to onChange
//   handleOnChangeUser(e) {
//     // Set ONLY the "newUser" state by passing in an object containing
//     // "newUser" as a property with the corresponding, updated value
//     this.setState({
//       newUser: e.target.value,
//     });
//   }

//   handleOnChangePassword(e) {
//     this.setState({
//       newPassword: e.target.value,
//     });
//   }

//   handleOnChangeEmail(e) {
//     this.setState({
//       email: e.target.value,
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     fetch('http://localhost:3000/signup', {
//       method: 'POST',
//       body: JSON.stringify(this.state),
//       header: {
//         'content-type': 'application/json'
//       }
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }

//   // What you want to render on the webpage
//   render() {
//     // Return HTML/jsx elements
//     // Must return a *single* element
//     return (
//       // <StreamConfirmation />
//       <form>
//         Email:{' '}
//         <input
//           type="text"
//           onChange={this.handleOnChangeEmail}
//           value={this.state.email}
//           required
//         />
//         User:{' '}
//         <input
//           type="text"
//           onChange={this.handleOnChangeUser}
//           value={this.state.newUser}
//           required
//         />
//         Password:{' '}
//         <input
//           type="text"
//           onChange={this.handleOnChangePassword}
//           value={this.state.newPassword}
//           required
//         />
//         <button type="submit" onClick={this.handleSubmit} value="Create User">
//           {' '}
//           Sign Up{' '}
//         </button>
//       </form>
//     );
//   }
// }

// create more onclick synthetic event listeners
// button id
// action set to end point
// post method

const SignUpManager = () => {
  console.log(
    '%cSignup Initiated!',
    'font-weight: bold; font-size: 53px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38), 6px 6px 0 rgb(226,91,14), 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
  );
  return (
    <div id="signUp">
      <form method="POST" action="/signup">
        Email: <input name="email" type="email" required />
        User: <input name="newUser" type="text" required />
        Password: <input name="newPassword" type="password" required />
        Netflix: <input name="netflix" type="text" required />
        Hulu: <input name="hulu" type="text" required />
        Amazon: <input name="amazon" type="text" required />
        <button type="submit" value="Create User">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUpManager;
