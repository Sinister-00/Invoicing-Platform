import { Product } from './product';

export interface CartItem {
  id: string;
  name: string;
  color: string;
  amount: number;
  product: Product;
}

export interface CartState {
  cart: CartItem[];
  total_item: string;
  total_price: string;
  tax_fee: string;
  tax: string;
  addToCart: (
    id: string,
    name: string,
    color: string,
    amount: number,
    product: Product,
  ) => void;
  setDecrease: (id: string) => void;
  setIncrement: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}
