/* eslint-disable react/prop-types */

import styled from "styled-components";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
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
  background-color: ${(props) => (props.edit ? "#007bff" : "#e80000")};
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
`;

function ProgressListTable({
  toggleSortOrder,
  sortOrder,
  progress,
  openModalForEdit,
  handleDelete,
}) {
  const { role } = JSON.parse(localStorage.getItem("data"));
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Project Name</TableHeader>
          <TableHeader>Project Contribution</TableHeader>
          <TableHeader>
            <div className="flex">
              <p> Progress Percentage</p>

              <button
                className="hover:bg-gray-200 rounded-full p-1 ml-2"
                onClick={toggleSortOrder}
              >
                {sortOrder === "asc" ? (
                  <BiArrowFromBottom color="blue" size={25} />
                ) : (
                  <BiArrowFromTop color="blue" size={25} />
                )}
              </button>
            </div>
          </TableHeader>
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
              <div className="flex flex-col gap-3">
                { role == "employee" ? <Button edit onClick={() => openModalForEdit(progressEntry)}>
                  Edit
                </Button> : ""}
                <Button onClick={() => handleDelete(progressEntry._id)}>
                  Delete
                </Button>
              </div>{" "}
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

export default ProgressListTable;
