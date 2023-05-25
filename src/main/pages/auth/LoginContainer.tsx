import styled from "styled-components";
import AuthForm from "../AuthForm"

const Container = styled.div`
  color: #f1f1f1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 520px;
  margin: 0 auto;
`;

const LoginContainer = () => { 
    return <Container>
        <AuthForm></AuthForm>
    </Container>;

}

export default LoginContainer;