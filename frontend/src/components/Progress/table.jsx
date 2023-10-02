/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { BiArrowFromBottom ,BiArrowFromTop } from 'react-icons/bi'
// Create styled components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  font-weight: bold;
`;

const TableRow = styled.tr`
  border: 1px solid #ccc;
`;

const TableData = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;

const Button = styled.button`
  background-color: ${(props) => (props.edit ? '#28a745' : '#007bff')};
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
`;

function ProgressListTable({toggleSortOrder,sortOrder, progress, openModalForEdit, handleDelete }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Project Name</TableHeader>
          <TableHeader>Project Contribution</TableHeader>
          <TableHeader>Progress Percentage
            <button onClick={toggleSortOrder}>
          {sortOrder === "asc" ? <BiArrowFromBottom size={30} /> : <BiArrowFromTop size={30}/>}
        </button> </TableHeader>
          <TableHeader>Actions</TableHeader>
        </tr>
      </thead>
      <tbody>
        {progress?.map((progressEntry) => (
          <TableRow key={progressEntry._id}>
            <TableData>{progressEntry.projectName}</TableData>
            <TableData>{progressEntry.projectContribution}</TableData>
            <TableData>{progressEntry.progressPercentage}%</TableData>
            <TableData>
              <Button edit onClick={() => openModalForEdit(progressEntry)}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(progressEntry._id)}>Delete</Button>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

export default ProgressListTable;
