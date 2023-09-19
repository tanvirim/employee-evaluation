import { useEffect, useState} from 'react';


import useLogin from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

function Login() {
const user = JSON.parse(localStorage.getItem("data"))
  const navigate = useNavigate() ;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { isLoading, error, isLoggedIn, loginUser, } = useLogin();

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <div>Dont have an account? <a href="/register">Register</a></div>
        {error && <p className="error-message">{error}</p>}
        
      </form>
    </div>
  );
}

export default Login;
