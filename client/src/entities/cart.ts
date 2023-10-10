export interface CartItem {
  id: string;
  color: string;
  amount: number;
  product: string;
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
    product: string,
  ) => void;
  setDecrease: (id: string) => void;
  setIncrement: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}
