/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiUrl } from '../constants';
function AllEmployeesName({ onSelectEmployeeName }) {
  const [employeeUsers, setEmployeeUsers] = useState([]);
  const [selectedEmployeeName, setSelectedEmployeeName] = useState('');

  useEffect(() => {
    // Function to fetch employee users
    const fetchEmployeeUsers = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/users/all-employees`); // Adjust the API endpoint as needed
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
    <div className='p-4 bg-gray-200 border border-gray-300 rounded-md'>
      <label className='block text-sm font-medium text-gray-700 mb-2'>
        Select an Employee:
      </label>
      <select
        onChange={handleEmployeeSelect}
        value={selectedEmployeeName}
        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400'
      >
        <option value=''>Select an employee</option>
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
