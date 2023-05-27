import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { purchase } from "../userApi";

type ProductDto = {
    id: string;
    count: number;
}
type Params = { products:ProductDto[] };
const useProductPurchase = (): UseMutationResult<number | undefined, AxiosError<unknown, any>, Params> => {
    const queryClient = useQueryClient();
        
    return useMutation((data: Params) => purchase(data), {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };
  
  export default useProductPurchase;