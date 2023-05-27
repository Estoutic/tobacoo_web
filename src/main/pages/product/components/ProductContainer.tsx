import styled from "styled-components";
import React, { useContext } from "react";
import useProducts from "../../../../api/product/useProducts";


const ItemContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-left: 25%;
  margin-top: 10%;

  width: 50%;
  height: 100%;
  display: flex;
`;

const Title = styled.a`
  color: black;
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  width: 100%;
`;



const ProductContainer = (categoryId: string) => {
  const {data} = useProducts(categoryId);
  console.log(data);

  return (
    <section id={"1"}>
      <ItemContainer>
        <Title>{"tittle"}</Title>
      </ItemContainer>
    </section>
  );
};

export default ProductContainer;
