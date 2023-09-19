import { useState, useEffect } from 'react';
import axios from 'axios';

function useCreateProgress() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const createProgressEntry = async (newEntry) => {
    try {
      setIsLoading(true);

      const response = await axios.post('http://localhost:3000/api/v1/employee/progress', newEntry);

      if (response.status === 201) {
        setSuccess(true); // Set success indicator to true
      } else {
        console.error('Failed to create progress entry');
      }
    } catch (error) {
      console.error('Error creating progress entry:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      // You can trigger any additional logic here after success
    }
  }, [success]);

  return {
    isLoading,
    success,
    createProgressEntry,
  };
}

export default useCreateProgress;
