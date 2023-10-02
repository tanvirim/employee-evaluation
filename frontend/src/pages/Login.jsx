/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { ApiUrl } from '../constants';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${ApiUrl}/users/login`, formData);

      if (response.data.token) {
        navigateBasedOnRole(response.data.token); // Navigate based on role
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred during login. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const navigateBasedOnRole = (token) => {
    const decodedToken = jwt_decode(token);
    localStorage.setItem('data', JSON.stringify({ ...decodedToken }));
    if (decodedToken && decodedToken.role) {
      const role = decodedToken.role;

      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'evaluator') {
        navigate('/evaluator-dashboard');
      } else {
        navigate('/employee-dashboard');
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <h1>Login Here</h1>
          <input
            placeholder='E-mail'
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            placeholder='Password'
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <span>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          Don't have an account? <Link to='/register'>Create One.</Link>
        </span>
      </form>
    </Container>
  );
}

export default Login;

const Container = styled('div')`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  h1 {
    font-size: 30px;
    color: #f7eeee;
    padding: 10px;
  }
  form {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 16px;
  margin-top: 10px;
`;
