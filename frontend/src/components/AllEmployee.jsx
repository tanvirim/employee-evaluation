/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';

function AllEmployees({ onSelectEmployee }) {
  const [employeeUsers, setEmployeeUsers] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');

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
    const selectedId = event.target.value;

    console.log("id",selectedId)
    setSelectedEmployeeId(selectedId);

    // Call the callback function to send the selectedEmployeeId to the parent
    onSelectEmployee(selectedId);
  };

  return (
    <div>
      <label>Select an employee:</label>
      <select onChange={handleEmployeeSelect} value={selectedEmployeeId}>
        <option value="">Select an employee</option>
        {employeeUsers.map((employee) => (
          <option key={employee.id} value={employee._id}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AllEmployees;
