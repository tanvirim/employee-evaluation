import  { useEffect } from "react";
import styled from "styled-components";
import useFindProgresdById from "../hooks/useFindProgress";
import useCreateProgress from "../hooks/useAddProgress";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
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

function ShowProgress() {
  const { id, name } = JSON.parse(localStorage.getItem("data"));

  const { data, isLoading, error } = useFindProgresdById(id);
  const { success } = useCreateProgress();

  useEffect(() => {}, [success]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      {data && (
        <div>
          <Title>Project Table</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Project Name</TableHeaderCell>
                <TableHeaderCell>Project Contribution</TableHeaderCell>
                <TableHeaderCell>Progress Percentage</TableHeaderCell>
                <TableHeaderCell>Employee Name</TableHeaderCell>
              </TableRow>
            </TableHead>
            <tbody>
              {data.map((project, index) => (
                <TableRow key={index}>
                  <TableCell>{project.projectName}</TableCell>
                  <TableCell>{project.projectContribution}</TableCell>
                  <TableCell>{project.progressPercentage}%</TableCell>
                  <TableCell>{name}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
}

export default ShowProgress;
