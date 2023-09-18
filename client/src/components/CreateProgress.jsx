import  { useState } from 'react';
import useCreateProgress from '../hooks/useProgress';


function CreateProgressComponent() {
  
  const { isLoading, success, createProgressEntry } = useCreateProgress();
  const {_id} = JSON.parse(localStorage.getItem('data'))
  console.log("userId" ,_id)
  
  const [newEntry, setNewEntry] = useState({
    projectName: '',
    projectContribution: '',
    progressPercentage: 0,
    user:_id, // Provide a user ID
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProgressEntry(newEntry);
    console.log(newEntry)
  };

  return (
    <div>
      <h1>Create Progress Entry</h1>
      {success && <p>Progress entry created successfully!</p>}
      {isLoading && <p>Creating progress entry...</p>}
      {!success && !isLoading && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={newEntry.projectName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectContribution">Project Contribution:</label>
            <input
              type="text"
              id="projectContribution"
              name="projectContribution"
              value={newEntry.projectContribution}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="progressPercentage">Progress Percentage:</label>
            <input
              type="number"
              id="progressPercentage"
              name="progressPercentage"
              value={newEntry.progressPercentage}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create Progress Entry'}
          </button>
        </form>
      )}
    </div>
  );
}

export default CreateProgressComponent;
