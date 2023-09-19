import  { useState } from 'react';
import useRegister from '../hooks/useRegister';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const { isLoading, error, success, registerUser } = useRegister();

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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
            <option value="evaluator">Evaluator</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading}>
          Register
        </button>
        <div>Already have an account? <a href="/login">Login</a></div>
        {isLoading && <p>Loading...</p>}
        {success && 
        navigate('/login')
        }
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
}

export default Register;
