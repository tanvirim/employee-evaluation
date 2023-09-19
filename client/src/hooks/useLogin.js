import { useState } from 'react';
import axios from 'axios'; // Import Axios
import jwt_decode from "jwt-decode";
// Custom hook for login functionality
function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function loginUser(formData) {
    setIsLoading(true);
    setError(null);

    try {
      // Make an API request to your login endpoint with Axios
      const {data} = await axios.post('http://localhost:3000/api/v1/users/login', formData);
      
      const decoded = jwt_decode(data.token);
       console.log(decoded)
      localStorage.setItem(
        "data",
        JSON.stringify({ ...decoded })
      );
      console.log("data" ,data)
      if (data.success) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, isLoggedIn, loginUser };
}

export default useLogin;
