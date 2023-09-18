import useFindProgresdById from "../hooks/useFindProgress";




function ShowProgress() {
    const {_id} = JSON.parse(localStorage.getItem('data'))

  const { data, isLoading, error } = useFindProgresdById(_id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {console.log(" data is" , data)}
      {data && (
          <div>
          <h1>Project Table</h1>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Project Contribution</th>
                <th>Progress Percentage</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {data.map((project, index) => (
                <tr key={index}>
                  <td>{project.projectName}</td>
                  <td>{project.projectContribution}</td>
                  <td>{project.progressPercentage}%</td>
                  <td>{project.user}</td>
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
