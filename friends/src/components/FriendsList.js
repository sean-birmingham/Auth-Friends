import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import NewFriendForm from './NewFriendForm';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <NewFriendForm friends={friends} />
      <h2>Friends</h2>
      {friends.map(friend => {
        return <Friend key={friend.id} data={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
