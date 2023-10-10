import { create } from 'zustand';

import { CartState } from '../entities/cart';

const useCartStore = create<CartState>((set) => ({
  cart: [],
  total_item: '',
  total_price: '',
  tax_fee: '',
  tax: '',
  addToCart: (id, color, amount, product) => {
    set((state) => ({
      cart: [...state.cart, { id, color, amount, product }],
    }));
  },
  setDecrease: (id) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item,
      ),
    }));
  },
  setIncrement: (id) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item,
      ),
    }));
  },
  removeItem: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));

const initialCartState = JSON.parse(localStorage.getItem('plotline-cart') || '{}');

if (initialCartState) {
  useCartStore.setState((state) => ({ ...state, ...initialCartState }));
}

useCartStore.subscribe((state) => {
  localStorage.setItem('plotline-cart', JSON.stringify(state));
});

export default useCartStore;
