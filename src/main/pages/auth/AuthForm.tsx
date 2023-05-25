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
  phone: string;
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
  margin-left: 40px;
  padding: 16px;
  width: 60%;
  animation: ${rotateY} 0.5s linear;

  ${({ formPosition }) =>
    formPosition === "right" &&
    css`
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
  width: 150px;
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

  ${({ isLoginFormOpen }) =>
    isLoginFormOpen
      ? css`
          transform: scaleX(1);
        `
      : css`
          transform: scaleX(-1);
        `}
`;
const RegisterForm = styled(Form)`
  margin-left: 0;
`;

const AuthForm = ({
  type,
  onSubmit,
  isLoginFormOpen,
}: AuthFormProps & { isLoginFormOpen: boolean }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    phone: "",
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
    if (
      type === "login" ||
      formData.firstName ||
      formData.lastName ||
      formData.username
    ) {
      onSubmit(formData);
    }
  };

  return (
    <Form
      formPosition={type === "login" ? "left" : "right"}
      onSubmit={handleSubmit}
    >
      <h2>{type === "login" ? "Log in" : "Register"}</h2>
      <div>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
      </div>
      <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            minLength={6}
            required
          />
      </div>
      {type === "register" && (
        <>
          <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleInputChange}
              />
          </div>
          <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleInputChange}
              />
          </div>
          <div>
              <input
                type="text"
                name="username"
                value={formData.username || ""}
                onChange={handleInputChange}
              />
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
    // здесь можно добавить обработку отправки данных формы авторизации или регистрации
  };
  return (
    <>
      {isLoginFormOpen ? (
        <AuthFormContainer isLoginFormOpen={isLoginFormOpen}>
          <AuthForm
            type="login"
            onSubmit={handleAuthSubmit}
            isLoginFormOpen={isLoginFormOpen}
          />
        </AuthFormContainer>
      ) : (
        <AuthFormContainer isLoginFormOpen={isLoginFormOpen}>
          <AuthForm
            type="register"
            onSubmit={handleAuthSubmit}
            formPosition="left"
            isLoginFormOpen={isLoginFormOpen}
          />
        </AuthFormContainer>
      )}
      <InfoContainer>
        <h2>{isLoginFormOpen ? "Welcome back!" : "Create an account"}</h2>
        <p>
          {isLoginFormOpen
            ? "Log in to access your account and the platform features"
            : "Join our community of passionate programmers and learners. Sign up to share, teach and learn together."}
        </p>
        <Button onClick={handleFormToggle}>
          {isLoginFormOpen ? "Create an account" : "Log in"}
        </Button>
      </InfoContainer>
    </>
  );
};

export default LoginContainer;
