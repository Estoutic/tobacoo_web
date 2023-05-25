import styled, { css } from "styled-components";
import React, { useState } from "react";

const Form = styled.form<FormProps>`
  margin-left: 20px;
  margin: 30px;
  padding: 30px;
  width: 70%;
  background-color: #ffffff;
  border-radius: 10px;

  ${({ formPosition }) =>
    formPosition === "right" &&
    css`
      transform: scaleX(-1);
    `}
`;

const Input = styled.input`
  display: block;
  width: 70%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #333333;
  border-radius: 5px;
  color: #333333;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333333;
`;

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
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
      <Title>{type === "login" ? "Log in" : "Register"}</Title>
      <div>
        <Input
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone number"
          required
        />
      </div>
      <div>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          minLength={6}
          required
        />
      </div>
      {type === "register" && (
        <>
          <div>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleInputChange}
              placeholder="First name"
            />
          </div>
          <div>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleInputChange}
              placeholder="Last name"
            />
          </div>
          <div>
            <Input
              type="text"
              name="username"
              value={formData.username || ""}
              onChange={handleInputChange}
              placeholder="Username"
            />
          </div>
        </>
      )}
      <button type="submit">{type === "login" ? "Log in" : "Register"}</button>
    </Form>
  );
};

export default AuthForm;
