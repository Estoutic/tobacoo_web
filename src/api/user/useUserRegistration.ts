import { registerUser } from "../userApi";
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import userRegistrationKeys from "./keys";
import { AxiosError } from "../../../node_modules/axios/index";

type Params = {
  firstName?: string;
  surName?: string;
  lastName?: string;
  bonus?: number;
  phone: string;
  password: string;
}

const useUserAuth = (): UseMutationResult<number,AxiosError,Params> =>{
  const queryClient = useQueryClient();

  return useMutation((data: Params) => registerUser(data),{
    onSuccess: (id: number) => {
      console.log(id);
    }
  })
}
export default useUserAuth;
