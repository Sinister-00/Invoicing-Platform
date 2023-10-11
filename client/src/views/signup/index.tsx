import Button from 'components/button';
import Header from 'components/header';
import { LOCAL_STORAGE_KEYS } from 'entities/local-storage';
import { ROUTES } from 'entities/routes';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from 'store/useUser';

import handleSignUp from '../../api/handleSignup';
import Wrapper from './wrapper';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setUserData } = useUserStore();

  const handleSignIn = async () => {
    try {
      const res = await handleSignUp({
        name,
        email,
        username,
        password,
      });

      if (res.success) {
        setUserData(res.data);
        localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(res.data));
        localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, JSON.stringify(res.data.token));
        navigate(ROUTES.HOME, {
          replace: true,
        });
        navigate(0);
      } else {
        console.error('Failed to register user');
        setPassword('');
      }
    } catch (error) {
      setErrorMessage('User already exit / type valid email address');
      setTimeout(() => setErrorMessage(''), 5000);
      console.error('An error occurred', error);
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div className="sign-in-container">
          <h1>Sign Up</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <Button onClick={handleSignIn}>Sign In</Button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <p>
              Already have an account ?<a href={ROUTES.LOGIN}> click here</a>
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SignUpPage;
