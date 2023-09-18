import { useState } from 'react';
import useLogin from '../hooks/useLogin';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'employee', // Default role
  });

  const { isLoading, error, isLoggedIn, loginUser, } = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  if (isLoggedIn) {
    // Redirect the user to the dashboard or another authenticated page
    // return <Redirect to="/dashboard" />;
  }

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
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="error-message">{error}</p>}
        {isLoggedIn && <p>You are logged in!</p>}
      </form>
    </div>
  );
}

export default Login;
