import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  return (
    <div>
      <form>
        <label>Username: </label>
        <input type='text' name='username' />
        <label>Password: </label>
        <input type='password' name='password' />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
