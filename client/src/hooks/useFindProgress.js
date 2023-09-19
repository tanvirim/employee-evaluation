import { useState, useEffect } from 'react';
import axios from 'axios';

function useFindProgresdById(id) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL with the provided ID
    const apiUrl = `http://localhost:3000/api/v1/employee/progress/${id}`;
    // Fetch data from the API using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((axiosError) => {
        setError(axiosError);
        setIsLoading(false);
      });
  }, [id]);

  return { data, isLoading, error };
}

export default useFindProgresdById;
