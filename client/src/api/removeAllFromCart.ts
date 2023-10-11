import axios, { AxiosError, AxiosResponse } from 'axios';
import { LOCAL_STORAGE_KEYS } from 'entities/local-storage';

async function removeAllFromCart(): Promise<any> {
  const token = (localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) || '').replace(/"/g, '');
  try {
    const response: AxiosResponse = await axios.delete(
      // `https://tax-api-testing.onrender.com/api/v1/cart/delete/all`,
      `http://localhost:3001/api/v1/cart/delete/all`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = response.data;
    console.log('API response data:', response);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error('Axios error occurred while calling the API:', axiosError);
    } else {
      console.error('An error occurred while calling the API:', error);
    }

    return {};
  }
}

export default removeAllFromCart;
