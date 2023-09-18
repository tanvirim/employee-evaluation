import { useState } from 'react';
import useLogin from '../hooks/useLogin'


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { isLoading, error, isLoggedIn, loginUser ,user } = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData); // Use the loginUser function from the custom hook
    // localStorage.setItem("user", JSON.stringify({...user, password:""}))
    console.log("user p",user)
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
