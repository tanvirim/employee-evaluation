import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserGroup } from '../styles/FindUsers.styles.js'; // Import your styled components
import { ApiUrl } from '../constants.js';

function FindUsers() {
  const [adminUsers, setAdminUsers] = useState([]);
  const [employeeUsers, setEmployeeUsers] = useState([]);
  const [evaluatorUsers, setEvaluatorUsers] = useState([]);
  const [selectedUserType, setSelectedUserType] = useState('admin');

  useEffect(() => {
    const fetchUsers = async (userType) => {
      try {
        const response = await axios.get(`${ApiUrl}/users/all-${userType}s`);
        switch (userType) {
          case 'admin':
            setAdminUsers(response.data);
            break;
          case 'employee':
            setEmployeeUsers(response.data);
            break;
          case 'evaluator':
            setEvaluatorUsers(response.data);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(`Error fetching ${userType} users:`, error);
      }
    };

    fetchUsers(selectedUserType);
  }, [selectedUserType]);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${ApiUrl}/employee/progress/${userId}`);
      switch (selectedUserType) {
        case 'admin':
          setAdminUsers((prevUsers) =>
            prevUsers.filter((user) => user._id !== userId)
          );
          break;
        case 'employee':
          setEmployeeUsers((prevUsers) =>
            prevUsers.filter((user) => user._id !== userId)
          );
          break;
        case 'evaluator':
          setEvaluatorUsers((prevUsers) =>
            prevUsers.filter((user) => user._id !== userId)
          );
          break;
        default:
          break;
      }
      toast.success('User deleted successfully.');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('An error occurred while deleting user.');
    }
  };

  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-2xl text-center font-bold text-slate-600 mb-4'>
        Find All Users
      </h1>

      {/* Select Box */}
      <select
        className='p-2 border text-center rounded-md shadow-md mb-4'
        value={selectedUserType}
        onChange={(e) => setSelectedUserType(e.target.value)}
      >
        <option value='admin'>Admin Users</option>
        <option value='employee'>Employee Users</option>
        <option value='evaluator'>Evaluator Users</option>
      </select>

      {/* User List */}
      <div className='grid text-center grid-cols-1 md:grid-cols-3 gap-4'>
        {selectedUserType === 'admin' && (
          <UserGroup>
            <h2 className='text-xl font-semibold mb-2'>Admin Users</h2>
            <ul>
              {adminUsers.map((user) => (
                <li key={user._id} className='mb-2'>
                  {user.name}
                </li>
              ))}
            </ul>
          </UserGroup>
        )}

        {selectedUserType === 'employee' && (
          <UserGroup>
            <h2 className='text-xl font-semibold mb-2'>Employee Users</h2>
            <ul>
              {employeeUsers.map((user) => (
                <li key={user._id} className='mb-2'>
                  {user.name}
                  <button
                    onClick={() => handleDelete(user._id)}
                    className='ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600'
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </UserGroup>
        )}

        {selectedUserType === 'evaluator' && (
          <UserGroup>
            <h2 className='text-xl font-semibold mb-2'>Evaluator Users</h2>
            <ul>
              {evaluatorUsers.map((user) => (
                <li key={user._id} className='mb-2'>
                  {user.name}
                </li>
              ))}
            </ul>
          </UserGroup>
        )}
      </div>
    </div>
  );
}

export default FindUsers;
