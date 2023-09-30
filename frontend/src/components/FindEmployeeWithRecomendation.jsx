import  { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Create styled components for table elements
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 16px;
  margin-top: 10px;
`;

const RecommendedEmployeesTable = () => {
  const [recommendedEmployees, setRecommendedEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch recommended employees from your API endpoint
    axios.get('https://employee-evaluation-tanvir-mitul.onrender.com/api/v1/employee/recomended-employee')
      .then((response) => {
        setRecommendedEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recommended employees:', error);
        setError('Error fetching recommended employees.');
      });
  }, []);

  return (
    <Container>
      <Title>Recommended Employees</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Employee Name</TableHeaderCell>
            <TableHeaderCell>Recommended for Increment</TableHeaderCell>
            <TableHeaderCell>Recommended for Promotion</TableHeaderCell>
          </TableRow>
        </TableHead>
        <tbody>
          {recommendedEmployees.map((employee) => (
            <TableRow key={employee._id}>
              <TableCell>{employee.employeeName}</TableCell>
              <TableCell>{employee.isRecommendedForIncrement ? 'Yes' : 'No'}</TableCell>
              <TableCell>{employee.isRecommendedForPromotion ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RecommendedEmployeesTable;
