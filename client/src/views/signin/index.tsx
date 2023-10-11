import axios from 'axios';
import Button from 'components/button';
import React, { useState } from 'react';

import Wrapper from './wrapper';

const API_URL = 'https://localhost:4000/auth/register';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSignIn = async () => {
    const userData = {
      email,
      password,
    };

    // try {
    //   const response = await axios.post(API_URL, userData);

    //   if (response.status === 200) {
    //     console.log('User registered successfully');
    //     const userEmail = response.data.getemail;
    //     localStorage.setItem('userEmail', JSON.stringify(userEmail));
    //     console.log(userEmail);
    //     window.location.href = '/';
    //   } else {
    //     console.error('Failed to register user');
    //   }
    // } catch (error) {
    //   setErrorMessage('User already exit / type valid email address');
    //   console.error('An error occurred', error);
    // }
  };

  return (
    <Wrapper>
      <div className="sign-in-container">
        <h1>Sign Up</h1>
        <div className="input-container">
          <input
            type="name"
            placeholder="Username"
            // value={name}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSignIn}>Sign Up</Button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <p>
            Already have an account ?<a href="/login"> click here</a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignInPage;
