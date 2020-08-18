import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  const initialState = {
    username: '',
    password: '',
  };

  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState(initialState);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
      e.preventDefault();
      setIsLoading(true);

      setTimeout(()=> {
        axios.post('http://localhost:5000/api/login', credentials).then((res) => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends');
          });
      }, [1000]);
  };

  return (
    <div>
      <form onSubmit={login}>
        <label htmlFor='username'>Username: &nbsp;&nbsp;</label>
        <input
          type='text'
          name='username'
          placeholder='Enter Your Username'
          onChange={onChange}
          value={credentials.username}
          className='input'
        />
        <br />
        <label htmlFor='password'>Password: &nbsp;&nbsp;</label>
        <input
          type='password'
          name='password'
          placeholder='Enter Your Password'
          onChange={onChange}
          value={credentials.password}
          className='input'
        />
        <button className='button'>{isLoading ? (
            <p>Loading...</p>
          ) : (
            <span>Button</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;