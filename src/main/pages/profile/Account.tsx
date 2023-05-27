import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TopBar from "../home/topbar/TopBar";
import useProductCategories from "../../../api/product/useProductCategories";

const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    margin: 0;
    padding: 0;
    width: 100% ;
    height: 100% ;
    background-color: #f0f0f0 ;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: absolute;
  width: 25%;
  height: 50%;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #393e46;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 40px;
  text-align: center;
  padding-top: 15px;
  height: 50px;
  color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

`;

const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin-top: 50px;
  color: white;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  color: white;
`;

const Item = styled.div`
  padding-top: 15px;
  height: 40px;
  text-align: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin-top: 15px;
`;

type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  surName: string;
  bonus: number;
  phone: string;
  token: string;
};

type AccountProps = {
  user: UserData;
};
const Account = () => {
  const [user, setUser] = useState<UserData | null>(null);

  const { data, isLoading, isError } = useProductCategories();

  useEffect(() => {
    const userData = window.localStorage.getItem("userData");

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <>
      <GlobalStyle />
    <TopBar/>
      <Container>
        <Title>Личный кабинет</Title>

        <List>
          {user && (
            <ListItem>
              <Item>Имя: {`${user.firstName}`}</Item>
              <Item>Фамилия: {`${user.surName}`}</Item>
              <Item>Отчество: {`${user.lastName}`}</Item>
              <Item>Бонусы: {user.bonus}</Item>
              <Item>Телефон: {user.phone}</Item>
            </ListItem>
          )}
        </List>
      </Container>
    </>
  );
};

export default Account;
