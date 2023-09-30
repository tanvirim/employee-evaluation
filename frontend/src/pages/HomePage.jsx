
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
`;

const Hero = styled.section`
  text-align: center;
  padding: 60px 0;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  color: #666;
`;

const GetStartedButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Hero>
        <HeroContent>
          <Title>Welcome to Employee Evaluation</Title>
          <Subtitle>Empowering Performance Assessment and Improvement</Subtitle>
          <GetStartedButton to="/register">Get Started</GetStartedButton>
        </HeroContent>
      </Hero>
    </Container>
  );
};

export default HomePage;
