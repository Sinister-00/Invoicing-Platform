import axios, { AxiosError, AxiosResponse } from 'axios';
import { emptyProductResponse, Product } from 'entities/product';

async function getSpecificProduct(id: string): Promise<Product> {
  try {
    const response: AxiosResponse = await axios.get(
      `https://tax-api-testing.onrender.com/api/v1/product/specific/${id}`,
    );

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = response.data.data[0];
    console.log('API response data:', data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error('Axios error occurred while calling the API:', axiosError);
    } else {
      console.error('An error occurred while calling the API:', error);
    }

    return emptyProductResponse;
  }
}

export default getSpecificProduct;
