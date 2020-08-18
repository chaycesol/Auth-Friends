import React, { useState } from 'react';

const Login = () => {
  const initialState = {
    username: 'username',
    password: 'password',
  };

  const [credentials, setCredentials] = useState(initialState);

  const onChange = (e) => {
    setCredentials({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={onChange}
          value={credentials.username}
          className='input'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={onChange}
          value={credentials.password}
          className='input'
        />
        <button className='button'>Button</button>
      </form>
    </div>
  );
};

export default Login;