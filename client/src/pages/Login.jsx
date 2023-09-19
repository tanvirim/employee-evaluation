import { useEffect, useState} from 'react';

import styled from "styled-components";
import useLogin from '../hooks/useLogin';
import { useNavigate ,Link } from 'react-router-dom';

function Login() {
const user = JSON.parse(localStorage.getItem("data"))
  const navigate = useNavigate() ;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { isLoading, isLoggedIn, loginUser, } = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);


  }
    useEffect(() => {
      const navigateBasedOnRole = () => {
        if (isLoggedIn && user.role === "admin") {
          navigate("/admin-dashboard");
        } else if (isLoggedIn && user.role === "evaluator") {
          navigate("/evaluator-dashboard");
        } else if (isLoggedIn) {
          navigate("/employee-dashboard");
        }
      };
    
      navigateBasedOnRole();
    },[user,isLoggedIn])
 
 

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <h1>Login Here</h1>
          <input
          placeholder='E-mail'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        
          <input
          placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <span>
            Dont have an account ? <Link to="/register">Create One.</Link>
          </span>
      </form>
    </Container>
  );
}

export default Login;

const Container = styled("div")`
 height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  h1 {
    font-size:30px ;
      color: #f7eeee;
      padding: 10px;
      
    }
  form {
    color:white;
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