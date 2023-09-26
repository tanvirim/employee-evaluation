import  { useState, useEffect } from 'react';
import axios from 'axios';

const AddEmployeeRecommendation = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [isRecommendedForIncrement, setIsRecommendedForIncrement] = useState(false);
  const [isRecommendedForPromotion, setIsRecommendedForPromotion] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of employee names from your API endpoint
    axios.get('http://localhost:8080/api/v1/employee/employee-names')
      .then((response) => {
        console.log("response,", response)
        // Assuming the API response is an array of user objects with a 'name' property
        const names = response.data.map((user) => user);
        setEmployeeList(names);
      })
      .catch((error) => {
        console.error('Error fetching employee names:', error);
        setError('Error fetching employee names.');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to add a new employee recommendation
    axios.post('http://localhost:8080/api/v1/employee/employee-recommendation', {
      employeeName,
      isRecommendedForIncrement,
      isRecommendedForPromotion,
    })
      .then(() => {
        // Handle success, update the employee list
        setEmployeeList([...employeeList, employeeName]);

        // Clear the form fields
        setEmployeeName('');
        setIsRecommendedForIncrement(false);
        setIsRecommendedForPromotion(false);
      })
      .catch((error) => {
        console.error('Error adding employee recommendation:', error);
        setError('Error adding employee recommendation.');
      });
  };

  return (
    <div>
      <h2>Add Employee Recommendation</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Employee Name:
            <select
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
            >
              <option value="" disabled>Select an employee</option>
              {employeeList.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Recommend for Increment:
            <input
              type="checkbox"
              checked={isRecommendedForIncrement}
              onChange={(e) => setIsRecommendedForIncrement(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <label>
            Recommend for Promotion:
            <input
              type="checkbox"
              checked={isRecommendedForPromotion}
              onChange={(e) => setIsRecommendedForPromotion(e.target.checked)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployeeRecommendation;
