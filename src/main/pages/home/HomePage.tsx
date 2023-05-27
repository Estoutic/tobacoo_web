import React, { useEffect } from "react";
import TopBar from "./topbar/TopBar";
import useProductCategories from "../../../api/product/useProductCategories";

const HomePage = () => {
  const { data, isLoading, isError } = useProductCategories();
  
  useEffect(() => {
    console.log(data);
  }, []);
  
  return (
    <>
      <TopBar/>
    </>
  );
};

export default HomePage;
