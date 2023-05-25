import { useQuery } from "react-query";
import { loginUser } from '../userApi';

import userKeys from './keys';

const useUserAuth = (phone, password) => {
  return useQuery([userKeys.user], () => loginUser(phone, password));
};

export default useUserAuth;