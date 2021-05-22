import React from 'react';

const SignUpManager = () => {
  this.state ={
    newUser: String,
    newPassword: String,
    email: String,
  }
  <div>
    <form onSubmit={createUser, newPassword, email}>
      <input
        id="new-user"
        value={newUser}
        onClick={e => createUser(e.target.value)}
      />
     
    <input
    id='new-password'
    value={newPassword}
    />
       <input
    id='new-email'
    value={email}
    />
     <button id='add-User' className="primary" type="submit">Create New User</button>
    </form>
  </div>
};

//create more onclick synthetic event listeners
//button id
//action set to end point
//post method

export default SignUpManager;