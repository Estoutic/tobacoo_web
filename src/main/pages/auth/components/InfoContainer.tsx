import React from "react";
import styled from "styled-components";

interface InfoContainerProps {
  isLoginFormOpen: boolean;
  onButtonClick: () => void;
}

const Container = styled.div`
  background-color: #393e46;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  align-items: center;
`;

const Heading = styled.h2`
  color: white;
`;

const Paragraph = styled.p`
  color: white;
  margin-bottom: 24px;
`;

const Button = styled.button`
  position: absolute;
  display: flex;
  padding: 12px 24px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #ffffff;
  border-radius: 30px;
  font-size: 18px;
  width: 150px;
  margin-left: 30%;
  margin-top: 300px;
  justify-content: center;
  cursor: pointer;
`;

const InfoContainer: React.FC<InfoContainerProps> = ({ isLoginFormOpen, onButtonClick }) => {
  return (
    <Container>
      <Heading>{isLoginFormOpen ? "Welcome back!" : "Create an account"}</Heading>
      <Paragraph>
        {isLoginFormOpen
          ? "Log in to access your account and the platform features"
          : "Join our community of passionate programmers and learners. Sign up to share, teach and learn together."}
      </Paragraph>
      <Button onClick={onButtonClick}>
        {isLoginFormOpen ? "Create an account" : "Log in"}
      </Button>
    </Container>
  );
};

export default InfoContainer;