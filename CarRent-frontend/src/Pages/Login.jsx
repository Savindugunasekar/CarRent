import React, { useState } from 'react';
import './CSS/Login.css';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    try {
      console.log('signup function succeeded', formdata);
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      });

      const responseData = await response.json();
      localStorage.setItem('customername', responseData.customer); 
      localStorage.setItem('customerEmail',responseData.customerEmail);
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/');
    } catch (error) {
      console.error('Error:', error);
      window.alert('An error occurred during signup');
    }
  };

  const login = async () => {
    try {
      console.log('login function succeeded', formdata);
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      });

      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token',responseData.token)
        localStorage.setItem('customername', responseData.customer);
        localStorage.setItem('customerEmail',responseData.customerEmail); 
        window.location.replace('/');
      } else {
        window.alert(responseData.error);
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('An error occurred during login');
    }
  };

  return (
    <div className='login'>
      <div className="logincard">
        <h1>{state}</h1>
        {state === 'Sign Up' && (
          <div>
            <label htmlFor="name">Username</label><br />
            <input type="text" value={formdata.name} onChange={changeHandler} name='name' id='name' />
          </div>
        )}
        <div>
          <label htmlFor="email">E-mail</label><br />
          <input type="text" onChange={changeHandler} value={formdata.email} name='email' id='email' />
        </div>
        <div>
          <label htmlFor="password">Password</label><br />
          <input type="password" onChange={changeHandler} value={formdata.password} name='password' id='password' />
        </div>
        <div>
          {state === "Sign Up" ? (
            <p>Already have an account? <span><a href="/" onClick={(event) => { event.preventDefault(); setState("Login") }}>log in here</a></span></p>
          ) : (
            <p>Create an account? <span><a href="/" onClick={(event) => { event.preventDefault(); setState("Sign Up") }}>Click here</a></span></p>
          )}
        </div>
        <button onClick={() => {
          state === 'Sign Up' ? signup() : login();
        }}>Continue</button>
      </div>
    </div>
  );
};

export default Login;
