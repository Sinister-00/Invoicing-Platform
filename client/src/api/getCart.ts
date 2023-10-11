import axios, { AxiosError, AxiosResponse } from 'axios';
import { LOCAL_STORAGE_KEYS } from 'entities/local-storage';
import { Product } from 'entities/product';

interface CartProduct {
  id: number;
  product: Product;
  quantity: number;
  tax: number;
  taxItemPrice: string;
  itemTotal: number;
}

export interface Cart {
  products: CartProduct[];
  cartTotal: number;
  taxTotal: number;
}

export const emptyCart: Cart = {
  products: [],
  cartTotal: 0,
  taxTotal: 0,
};

async function getCart(): Promise<Cart> {
  try {
    const token = (localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) || '').replace(
      /"/g,
      '',
    );

    const response: AxiosResponse = await axios.get(
      // `https://tax-api-testing.onrender.com/api/v1/cart/delete/specific/${productId}`,
      `http://localhost:3001/api/v1/cart/get/all`,
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

    const data = response.data.data;
    console.log('API response data:', response);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error('Axios error occurred while calling the API:', axiosError);
    } else {
      console.error('An error occurred while calling the API:', error);
    }

    return emptyCart;
  }
}

export default getCart;
