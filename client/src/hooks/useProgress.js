import { useState, useCallback } from 'react';

function useCreateProgress() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const createProgressEntry = useCallback(async (newEntry) => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/api/v1/employee/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry),
      });

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
  }, []);

  return {
    isLoading,
    success,
    createProgressEntry,
  };
}

export default useCreateProgress;
