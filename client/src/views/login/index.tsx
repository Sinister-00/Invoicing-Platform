import React, { useState } from 'react';
import Wrapper from './wrapper';
import { Button } from 'style-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://localhost:4000/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {

    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      if (response.status === 200) {
        console.log('User logged in successfully');
        const token = response.data.accessToken;
        console.log('Response data:', response.data);
        const userEmail = response.data.getemail;
        localStorage.setItem('userEmail', JSON.stringify(userEmail));
        console.log(userEmail);
        navigate('/');
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
    <Wrapper>
      <div className="login-container">
        <h1>Login</h1>
        <div className="input-container">
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
          <Button onClick={handleLogin}>Login</Button>
          {errorMessage && <p style={{ color: 'red' }}>({errorMessage})</p>}
          <p>New User? <a href='/signin'>SignIn</a></p>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
