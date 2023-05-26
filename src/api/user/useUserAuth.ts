import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { loginUser } from "../userApi";

type Params = { phone: string; password: string };

const useUserAuth = (): UseMutationResult<number, AxiosError, Params> => {
  const queryClient = useQueryClient();

  return useMutation((data: Params) => loginUser(data.phone, data.password), {
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default useUserAuth;