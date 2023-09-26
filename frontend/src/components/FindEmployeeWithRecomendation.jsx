// RecommendedEmployeesTable.js
import  { useState, useEffect } from 'react';
import axios from 'axios';

const RecommendedEmployeesTable = () => {
  const [recommendedEmployees, setRecommendedEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch recommended employees from your API endpoint
    axios.get('http://localhost:8080/api/v1/employee/recomended-employee')
      .then((response) => {
        setRecommendedEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recommended employees:', error);
        setError('Error fetching recommended employees.');
      });
  }, []);

  return (
    <div>
      <h2>Recommended Employees</h2>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Recommended for Increment</th>
            <th>Recommended for Promotion</th>
          </tr>
        </thead>
        <tbody>
          {recommendedEmployees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.employeeName}</td>
              <td>{employee.isRecommendedForIncrement ? 'Yes' : 'No'}</td>
              <td>{employee.isRecommendedForPromotion ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendedEmployeesTable;
