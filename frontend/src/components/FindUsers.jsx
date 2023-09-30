import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  UserListContainer,
  UserGroup,
} from '../styles/FindUsers.styles.js'; // Import your styled components

function FindUsers() {
  const [adminUsers, setAdminUsers] = useState([]);
  const [employeeUsers, setEmployeeUsers] = useState([]);
  const [evaluatorUsers, setEvaluatorUsers] = useState([]);

  useEffect(() => {
    // Function to fetch admin users
    const fetchAdminUsers = async () => {
      try {
        const response = await axios.get('https://employee-evaluation-tanvir-mitul.onrender.com/api/v1/users/all-admins'); // Adjust the API endpoint as needed
        setAdminUsers(response.data);
      } catch (error) {
        console.error('Error fetching admin users:', error);
      }
    };

    // Function to fetch employee users
    const fetchEmployeeUsers = async () => {
      try {
        const response = await axios.get('https://employee-evaluation-tanvir-mitul.onrender.com/api/v1/users/all-employees'); // Adjust the API endpoint as needed
        setEmployeeUsers(response.data);
      } catch (error) {
        console.error('Error fetching employee users:', error);
      }
    };

    // Function to fetch evaluator users
    const fetchEvaluatorUsers = async () => {
      try {
        const response = await axios.get('https://employee-evaluation-tanvir-mitul.onrender.com/api/v1/users/all-evaluators'); // Adjust the API endpoint as needed
        setEvaluatorUsers(response.data);
      } catch (error) {
        console.error('Error fetching evaluator users:', error);
      }
    };

    // Fetch users when the component mounts
    fetchAdminUsers();
    fetchEmployeeUsers();
    fetchEvaluatorUsers();
  }, []);

  return (
    <UserListContainer>
      <UserGroup>
        <h2>Admin Users</h2>
        <ul>
          {adminUsers.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </UserGroup>

      <UserGroup>
        <h2>Employee Users</h2>
        <ul>
          {employeeUsers.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </UserGroup>

      <UserGroup>
        <h2>Evaluator Users</h2>
        <ul>
          {evaluatorUsers.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </UserGroup>
    </UserListContainer>
  );
}

export default FindUsers;
