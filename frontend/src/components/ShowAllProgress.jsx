// AllProgress.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const AllProgress = () => {
  const [progressList, setProgressList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all progress entries from your API endpoint
    axios.get('http://localhost:8080/api/v1/employee/all-progress')
      .then((response) => {
        setProgressList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching progress entries:', error);
        setError('Error fetching progress entries.');
      });
  }, []);

  return (
    <div>
      <h2>All Progress Entries</h2>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Project Contribution</th>
            <th>Progress Percentage</th>
            <th>User</th>
            
          </tr>
        </thead>
        <tbody>
          {progressList.map((progress) => (
            <tr key={progress._id}>
              <td>{progress.projectName}</td>
              <td>{progress.projectContribution}</td>
              <td>{progress.progressPercentage}</td>
              <td>{progress.user}</td>
        
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProgress;
