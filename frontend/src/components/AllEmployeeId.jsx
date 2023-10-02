/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiUrl } from '../constants';

function AllEmployees({ onSelectEmployeeId }) {
  const [employeeUsers, setEmployeeUsers] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');

  useEffect(() => {
    // Function to fetch employee users
    const fetchEmployeeUsers = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/users/all-employees`);
        setEmployeeUsers(response.data);
      } catch (error) {
        console.error('Error fetching employee users:', error);
      }
    };

    fetchEmployeeUsers();
  }, []);

  const handleEmployeeSelect = (event) => {
    const selectedId = event.target.value;

    setSelectedEmployeeId(selectedId);

    // Call the callback function to send the selectedEmployeeId to the parent
    onSelectEmployeeId(selectedId);
  };

  return (
    <div className='p-4 bg-gray-200 border border-gray-300 rounded-md'>
      <label className='block text-sm font-medium text-gray-700 mb-2'>
        Select an employee:
      </label>
      <select
        onChange={handleEmployeeSelect}
        value={selectedEmployeeId}
        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400'
      >
        <option value=''>Select an employee</option>
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
