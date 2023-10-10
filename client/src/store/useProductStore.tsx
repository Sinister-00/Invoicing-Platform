import axios from 'axios';
import { Product, ProductState } from 'entities/product';
import { create } from 'zustand';

const useProductStore = create<ProductState>((set) => ({
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: null,
  getProducts: async (url) => {
    set({ isLoading: true }); // Replace dispatch with set
    try {
      const res = await axios.get(url);
      const products = await res.data;
      set((state) => ({
        ...state,
        isLoading: false,
        products,
        featureProducts: products.filter((curElem: Product) => curElem.featured === true),
      }));
    } catch (error) {
      set((state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
    }
  },

  getSingleProduct: async (url) => {
    set({ isSingleLoading: true });
    try {
      const res = await axios.get(url);
      const singleProductData = res.data;
      set((state) => ({
        ...state,
        isSingleLoading: false,
        singleProduct: singleProductData,
      }));
    } catch (error) {
      set((state) => ({
        ...state,
        isSingleLoading: false,
        isError: true,
      }));
    }
  },
}));

export default useProductStore;
