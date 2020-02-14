import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const login = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends');
      })
      .catch(err => {
        localStorage.removeItem('token');
        console.log('invalid login', err);
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>Username: </label>
        <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          type='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
