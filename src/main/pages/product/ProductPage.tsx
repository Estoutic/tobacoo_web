import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../ProductContext";
import ProductContainer from "./components/ProductContainer";
import TopBar from "../home/topbar/TopBar";

const ProductPage = () => {
  const { categories } = useContext(ProductContext);
  const { id } = useParams();

  const categoryId = categories.find(
    (category) => category.customId === parseInt(id)
  )?.id;

  
  return (
    <>
      <TopBar />
      <ProductContainer categoryId = {categoryId}/>
    </>
  );
};

export default ProductPage;
