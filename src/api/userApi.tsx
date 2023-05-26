import axios, { AxiosResponse } from "axios";
import Long from 'long';

interface AuthFormData {
    firstName?: string;
    surName?: string;
    lastName?: string;
    bonus?: number;
    phone: string;
    password: string;
  }

export async function loginUser(phone: string, password: string): Promise<number> {
  try {
    const params = { phone, password };
    const response: AxiosResponse<AuthFormData> = await axios.get("http://0.0.0.0:8080/api/user/login", { params });
    return response.data;
  } catch (error: any) {
    console.error(error);
    return -1;
  }
}

export async function registerUser(userData: AuthFormData): Promise<number> {
    console.log(userData);
    try {
      const response: AxiosResponse<AuthFormData> = await axios.post("http://0.0.0.0:8080/api/user/register", userData , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error: any) {
      console.error(error);
      return -1;
    }
  }