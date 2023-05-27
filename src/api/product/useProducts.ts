import { useQuery } from "react-query";

import { getProducts } from "../userApi";

import producstKey from "./keys";

const useProducts = (id: string) => {
  return useQuery([producstKey.product], () => getProducts(id));
};

export default useProducts;
