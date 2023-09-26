
import { useEffect } from "react";
import useFindProgresdById from "../hooks/useFindProgress";
import useCreateProgress from "../hooks/useAddProgress";

function ShowProgress() {
  const { id ,name } = JSON.parse(localStorage.getItem("data"));
  
  const { data, isLoading, error } = useFindProgresdById(id);
  const{success}=useCreateProgress()
  console.log("success from showprogress" ,success)

  useEffect(() => {
  }, [success]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <div>
          <h1>Project Table</h1>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Project Contribution</th>
                <th>Progress Percentage</th>
                <th>Employee Name</th>
              
              </tr>
            </thead>
            <tbody>
              {data.map((project, index) => (
                <tr key={index}>
                  <td>{project.projectName}</td>
                  <td>{project.projectContribution}</td>
                  <td>{project.progressPercentage}%</td>
                  <td>{name}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ShowProgress;
