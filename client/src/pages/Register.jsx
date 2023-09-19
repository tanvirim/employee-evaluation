import  { useState } from 'react';
import useRegister from '../hooks/useRegister';
import { useNavigate ,Link} from 'react-router-dom';
import styled from "styled-components";


function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const { isLoading,  success, registerUser } = useRegister();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);

    console.log("data" ,formData)
  };

  return (
    <Container>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <h1>Register Here</h1>
          <input
          placeholder='Name'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          
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
        <div className="form-group">
          
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option >Select Role</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
            <option value="evaluator">Evaluator</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading}>
          Register
        </button>
        <span>
            Already have an account? <Link to="/login">  Login here</Link>
          </span>{isLoading && <p>Loading...</p>}
        {success && 
        navigate('/login')
        }
        
      </form>
    </Container>
  );
}

export default Register;

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

  /* role option styling */
  /* Style for the select element */
select#role {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 0.1rem solid #4e0eff;
  border-radius: 4px;
  background-color: #0A0A13; /* Set the background color to black */
  color: white; /* Set the text color to white */
}

/* Style for select options */
select#role option {
  background-color: #010120; /* Set the background color of options to blue */
  color: white; /* Set the text color of options to white */
}

/* Remove the default arrow in some browsers */
select#role::-ms-expand {
  display: none;
}

/* Add a custom arrow icon (optional) */
select#role:after {
  content: "\f078"; /* Unicode character for a down-arrow (you can use a custom icon) */
  font-family: FontAwesome; /* Use a font library (e.g., FontAwesome) for custom icons */
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: white;
  pointer-events: none;
}


`;