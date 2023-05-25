import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

interface LoginContainerProps {}

interface FormProps {
  formPosition: string;
}

interface AuthFormData {
  firstName?: string;
  lastName?: string;
  username?: string;
  email: string;
  password: string;
}

const rotateY = keyframes`
  from {
    transform: rotateY(-90deg);
  }
  to {
    transform: rotateY(0);
  }
`;

const Form = styled.form<FormProps>`
  margin-left:40px ;
  padding: 16px;
  width: 100%;
  animation: ${rotateY} 0.5s linear;

  ${({ formPosition }) =>
    formPosition === "right" &&
    css`
      animation-direction: reverse;
      transform: scaleX(-1);
    `}
`;

const InfoContainer = styled.div`
  background-color: #393e46;
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  align-items: center;
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
  width:150px ;
  margin-left: 30%;
  margin-top: 300px;
  justify-content: center;
  cursor: pointer;
`;
const AuthFormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  align-items: center;
  transition: transform 0.5s;

  ${({ isLoginFormOpen = false }) =>
    isLoginFormOpen
      ? css`
          transform: scaleX(1);
        `
      : css`
          transform: scaleX(-1);
        `}
`;

const AuthForm = ({ type, onSubmit }: AuthFormProps) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form
      formPosition={type === "login" ? "left" : "right"}
      onSubmit={handleSubmit}
    >
      <h2>{type === "login" ? "Log in" : "Register"}</h2>
      <div>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            minLength={6}
            required
          />
        </label>
      </div>
      {type === "register" && (
        <>
          <div>
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Username
              <input
                type="text"
                name="username"
                value={formData.username || ""}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </>
      )}
      <button type="submit">{type === "login" ? "Log in" : "Register"}</button>
    </Form>
  );
};

const LoginContainer: React.FC<LoginContainerProps> = ({}) => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(true);

  const handleFormToggle = () => {
    setIsLoginFormOpen((prevIsLoginFormOpen) => !prevIsLoginFormOpen);
  };

  const handleAuthSubmit = (formData: AuthFormData) => {
    console.log(formData);
    // здесь можно добавить обработку отправки данных формы авторизации
  };

  return (
    <>
      <AuthFormContainer isLoginFormOpen={isLoginFormOpen}>
        {isLoginFormOpen ? (
          <AuthForm type="login" onSubmit={handleAuthSubmit} />
        ) : (
          <AuthForm type="register" onSubmit={handleAuthSubmit} />
        )}
      </AuthFormContainer>
      <InfoContainer>
        <Button onClick={handleFormToggle}>
          {isLoginFormOpen ? "Register" : "Log in"}
        </Button>
      </InfoContainer>
    </>
  );
};

export default LoginContainer;
