import  { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
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

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const CheckBox = styled.input`
  margin-right: 8px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 16px;
  margin-top: 10px;
`;

const AddEmployeeRecommendation = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [isRecommendedForIncrement, setIsRecommendedForIncrement] = useState(false);
  const [isRecommendedForPromotion, setIsRecommendedForPromotion] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of employee names from your API endpoint
    axios.get('http://localhost:8080/api/v1/employee/employee-names')
      .then((response) => {
        // Assuming the API response is an array of user objects with a 'name' property
        const names = response.data.map((user) => user);
        setEmployeeList(names);
      })
      .catch((error) => {
        setError('Error fetching employee names.');
        console.log(error)
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to add a new employee recommendation
    axios.post('http://localhost:8080/api/v1/employee/employee-recommendation', {
      employeeName,
      isRecommendedForIncrement,
      isRecommendedForPromotion,
    })
      .then(() => {
        // Handle success, update the employee list
        setEmployeeList([...employeeList, employeeName]);

        // Clear the form fields
        setEmployeeName('');
        setIsRecommendedForIncrement(false);
        setIsRecommendedForPromotion(false);
      })
      .catch(() => {
        setError('Error adding employee recommendation.');
      });
  };

  return (
    <Container>
      <Title>Add Employee Recommendation</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            Employee Name:
            <Select
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
            >
              <option value="" disabled>Select an employee</option>
              {employeeList.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </Label>
        </FormGroup>
        <FormGroup>
          <CheckBoxLabel>
            Recommend for Increment:
            <CheckBox
              type="checkbox"
              checked={isRecommendedForIncrement}
              onChange={(e) => setIsRecommendedForIncrement(e.target.checked)}
            />
          </CheckBoxLabel>
        </FormGroup>
        <FormGroup>
          <CheckBoxLabel>
            Recommend for Promotion:
            <CheckBox
              type="checkbox"
              checked={isRecommendedForPromotion}
              onChange={(e) => setIsRecommendedForPromotion(e.target.checked)}
            />
          </CheckBoxLabel>
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default AddEmployeeRecommendation;
