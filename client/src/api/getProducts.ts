import axios, { AxiosError, AxiosResponse } from 'axios';
import { Product } from 'entities/product';

async function getProducts(): Promise<Product[]> {
  try {
    const response: AxiosResponse = await axios.get(
      'https://tax-api-testing.onrender.com/api/v1/product/all/1',
    );

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = response.data.data;
    console.log('API response data:', data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error('Axios error occurred while calling the API:', axiosError);
    } else {
      console.error('An error occurred while calling the API:', error);
    }

    return [];
  }
}

export default getProducts;
