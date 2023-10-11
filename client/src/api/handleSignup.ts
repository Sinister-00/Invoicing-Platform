import axios, { AxiosError } from 'axios';

type UserData = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export const emptyUser: ResponseUserData = {
  email: '',
  id: 0,
  isAdmin: false,
  isVerified: false,
  name: '',
  username: '',
};

export type ResponseUserData = {
  email: string;
  id: number;
  isAdmin: boolean;
  isVerified: boolean;
  name: string;
  username: string;
};

type Response = {
  data: ResponseUserData;
  message: string;
  success: boolean;
};

async function handleSignUp(userData: UserData): Promise<Response> {
  try {
    const response = await axios.post(
      'https://tax-api-testing.onrender.com/api/v1/auth/signup',
      // 'http://localhost:3001/api/v1/auth/signup',
      JSON.stringify(userData),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = response.data;
    console.log('API response data:', data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error('Axios error occurred while calling the API:', axiosError);
    } else {
      console.error('An error occurred while calling the API:', error);
    }

    return {
      message: 'Failed',
      data: emptyUser,
      success: false,
    };
  }
}

export default handleSignUp;
