import axios, { AxiosError, AxiosResponse } from 'axios';
import { LOCAL_STORAGE_KEYS } from 'entities/local-storage';

async function addToCart(productId: string, quantity: number): Promise<any> {
  try {
    const token = (localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) || '').replace(
      /"/g,
      '',
    );
    const body = {
      quantity,
      product_id: productId,
    };
    const response: AxiosResponse = await axios.post(
      // 'https://tax-api-testing.onrender.com/api/v1/cart/add',
      'http://localhost:3001/api/v1/cart/add',
      JSON.stringify(body),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log(token);

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

export default addToCart;
