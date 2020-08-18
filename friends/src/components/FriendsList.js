import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const FriendsList =() => {
     const initialFriend = {
        id: Date.now(),
        name: '',
        age: '',
        email: '',
        image: '',
      };
    
    const [friendsList, setFriendsList] = useState([])
    const [addFriend, setAddFriend] = useState(initialFriend);

    useEffect(() => {
        getData();
    }, [])
      
    const getData = () => {
        axiosWithAuth()
        .get('api/friends')
        .then((res) => {
          setFriendsList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const onChange = (e) => {
        setAddFriend({ ...addFriend, [e.target.name]: e.target.value });
      };

      const addNewFriend = (e) => {
        e.preventDefault();
    
        axiosWithAuth()
          .post('api/friends', addFriend)
          .then((res) => {
            console.log(res);
            setFriendsList([...friendsList], res.data);
          });
        getData();
      };  

      const deleteFriend = (id) => {
        axiosWithAuth().delete(`api/friends/${id}`);
        getData();
      };
    

    
  return(
    <div>
    <form onSubmit={addNewFriend}>
      <input
        className='input'
        type='text'
        name='name'
        placeholder='Name'
        onChange={onChange}
        value={addFriend.name}
      />
      <input
        className='input'
        type='number'
        name='age'
        placeholder='Age'
        onChange={onChange}
        value={addFriend.age}
      />
      <input
        className='input'
        type='email'
        name='email'
        placeholder='Email'
        onChange={onChange}
        value={addFriend.email}
      />
      <button>Add Friend</button>
    </form>

    {friendsList.map((friend) => (
      <div key={friend.id}>
        <h2>Name: {friend.name}</h2>
        <StyledImg src={friend.img} alt={friend.name}/>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
        <button onClick={() => deleteFriend(friend.id)}>Remove</button>
      </div>
    ))}
  </div>
);
};

export default FriendsList;

const StyledImg = styled.img`
    width: 20%;
    height: auto;
`