import{ useState } from "react";
import styled from "styled-components";
import useCreateProgress from "../hooks/useAddProgress";

const Container = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.p`
  color: #28a745;
  font-size: 16px;
  margin-top: 10px;
`;

const LoadingMessage = styled.p`
  color: #007bff;
  font-size: 16px;
  margin-top: 10px;
`;

function CreateProgressComponent() {
  const { isLoading, success, createProgressEntry } = useCreateProgress();

  const { id } = JSON.parse(localStorage.getItem("data"));

  const [newEntry, setNewEntry] = useState({
    projectName: "",
    projectContribution: "",
    progressPercentage: 0,
    user: id, // Provide a user ID
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
  };

  return (
    <Container>
      <Title>Create Progress Entry</Title>
      {success && <SuccessMessage>Progress entry created successfully!</SuccessMessage>}
      {isLoading && <LoadingMessage>Creating progress entry...</LoadingMessage>}
      {!success && !isLoading && (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="projectName">Project Name:</Label>
            <Input
              type="text"
              id="projectName"
              name="projectName"
              value={newEntry.projectName}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="projectContribution">Project Contribution:</Label>
            <Input
              type="text"
              id="projectContribution"
              name="projectContribution"
              value={newEntry.projectContribution}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="progressPercentage">Progress Percentage:</Label>
            <Input
              type="number"
              id="progressPercentage"
              name="progressPercentage"
              value={newEntry.progressPercentage}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Progress Entry"}
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default CreateProgressComponent;
