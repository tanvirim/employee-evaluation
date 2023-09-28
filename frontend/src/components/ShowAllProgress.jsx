import  { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
        setError('Error fetching progress entries.');
        console.log(error)
      });
  }, []);

  return (
    <Container>
      <Title>All Progress Entries</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Project Name</TableHeaderCell>
            <TableHeaderCell>Project Contribution</TableHeaderCell>
            <TableHeaderCell>Progress Percentage</TableHeaderCell>
            <TableHeaderCell>User</TableHeaderCell>
          </TableRow>
        </TableHead>
        <tbody>
          {progressList.map((progress) => (
            <TableRow key={progress._id}>
              <TableCell>{progress.projectName}</TableCell>
              <TableCell>{progress.projectContribution}</TableCell>
              <TableCell>{progress.progressPercentage}</TableCell>
              <TableCell>{progress.user}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllProgress;
