import axios, { AxiosResponse } from "axios";

interface AuthFormData {
  firstName?: string;
  surName?: string;
  lastName?: string;
  bonus?: number;
  phone: string;
  password: string;
}

interface CategoryDTO {
  id: string;
  name: string;
}
interface Product {
  id: string;
  name: string;
  imageLink: string;
  price: number;
  count: number;
  categoryId: string;
}

export async function loginUser(
  phone: string,
  password: string
): Promise<number> {
  try {
    const body = { phone, password }; // задаем параметры в request body
    const response: AxiosResponse<AuthFormData> = await axios.post(
      "http://0.0.0.0:8080/login",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setAuthHeader(response.data.token);
    console.log(response.data.token);
    return response.data;
  } catch (error: any) {
    console.error(error);
    return -1;
  }
}

export async function registerUser(userData: AuthFormData): Promise<number> {
  console.log(userData);
  try {
    const response: AxiosResponse<AuthFormData> = await axios.post(
      "http://0.0.0.0:8080/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setAuthHeader(response.data.token);
    console.log(response.data.token);
    return response.data;
  } catch (error: any) {
    console.error(error);
    return -1;
  }
}

export async function getCategories(): Promise<CategoryDTO[]> {
  try {
    const response: AxiosResponse<CategoryDTO[]> = await axios.get<
      CategoryDTO[]
    >("http://0.0.0.0:8080/category/all", {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProducts(id: string): Promise<Product[]> {
  try {
    const response: AxiosResponse<Product[]> = await axios.get<
    Product[]
    >(`http://0.0.0.0:8080/product/category/${id}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getAuthToken = () => {
  return window.localStorage.getItem("auth_token");
};

export const setAuthHeader = (token) => {
  window.localStorage.setItem("auth_token", token);
};

export async function checkAuth(): Promise<boolean> {
  try {
    const response = await axios.get("http://0.0.0.0:8080/api/user/check");
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error(error);
    return false;
  }
}
