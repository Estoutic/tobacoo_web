import React, { createContext, useEffect, useState } from "react";
import useProductCategories from "./api/product/useProductCategories";

interface CategoryDTO {
  id: string;
  name: string;
  customId: number;
}

interface ProductContextType {
  categories: CategoryDTO[];
  isLoading: boolean;
  isError: boolean;
}

export const ProductContext = createContext<ProductContextType>({
  categories: [],
  isLoading: false,
  isError: false,
});

const ProductContextProvider: React.FC = ({ children }) => {
  const { data, isLoading, isError } = useProductCategories();
  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  useEffect(() => {
    if (data) {
      setCategories(
        data.map((category, index) => ({
          ...category,
          customId: index + 1,
        }))
      );
    }
  }, [data]);

  return (
    <ProductContext.Provider value={{ categories, isLoading, isError }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
