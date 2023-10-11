import axios from 'axios';
import Button from 'components/button';
import Header from 'components/header';
import { ROUTES } from 'entities/routes';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from 'store/useUser';

import handleSignIn from '../../api/handleSignin';
import Wrapper from './wrapper';

const API_URL = 'https://localhost:4000/auth';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUserData } = useUserStore();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await handleSignIn({
        username,
        password,
      });
      if (res.success) {
        console.log(res.message);
        setUserData(res.data);
        localStorage.setItem('plotline-userdata', JSON.stringify(res.data));
        navigate(ROUTES.HOME, {
          replace: true,
        });
        navigate(0);
        setErrorMessage('');
      } else {
        console.error('Failed to log in');
      }
    } catch (error) {
      setErrorMessage('Invalid username or password');
      console.error('An error occurred', error);
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div className="login-container">
          <h1>Login</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
            {errorMessage && <p style={{ color: 'red' }}>({errorMessage})</p>}
            <p>
              New User? <a href={ROUTES.SIGNUP}>Sign up..</a>
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default LoginPage;
