import axios, { AxiosResponse } from "axios";

interface UserData {
  phone: string;
  password: string;
  firstName: string;
  surName: string;
  lastName: string;
  bonus: number;
}

export async function loginUser(phone: string, password: string): Promise<UserData> {
  try {
    const params = { phone, password };
    const response: AxiosResponse<UserData> = await axios.get("http://0.0.0.0:8080/api/user/login", { params });
    return response.data;
  } catch (error: any) {
    console.error(error);
  }
}