import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const NewFriendForm = () => {
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = event => {
    setNewFriend({
      ...newFriend,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/friends/', newFriend)
      .then(res => {
        setNewFriend({
          ...newFriend,
          name: '',
          age: '',
          email: ''
        });
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          value={newFriend.name}
          onChange={handleChange}
        />
        <label>Age: </label>
        <input
          type='text'
          name='age'
          value={newFriend.age}
          onChange={handleChange}
        />
        <label>Email: </label>
        <input
          type='text'
          name='email'
          value={newFriend.email}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewFriendForm;
