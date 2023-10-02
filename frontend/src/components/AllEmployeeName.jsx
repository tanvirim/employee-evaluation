/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';

function AllEmployeesName({ onSelectEmployeeName }) {
  const [employeeUsers, setEmployeeUsers] = useState([]);
  const [selectedEmployeeName, setSelectedEmployeeName] = useState('');

  useEffect(() => {
    // Function to fetch employee users
    const fetchEmployeeUsers = async () => {
      try {
        const response = await axios.get('https://employee-evaluation-tanvir-mitul.onrender.com/api/v1/users/all-employees'); // Adjust the API endpoint as needed
        setEmployeeUsers(response.data);
      } catch (error) {
        console.error('Error fetching employee users:', error);
      }
    };

    fetchEmployeeUsers();
  }, []);

  const handleEmployeeSelect = (event) => {
    const selectedName = event.target.value;

    setSelectedEmployeeName(selectedName);

    // Call the callback function to send the selectedEmployeeId to the parent
    onSelectEmployeeName(selectedName);
  };

  return (
    <div>
      <label>Select an employee:</label>
      <select onChange={handleEmployeeSelect} value={selectedEmployeeName}>
        <option value="">Select an employee</option>
        {employeeUsers.map((employee) => (
          <option key={employee.id} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AllEmployeesName;
