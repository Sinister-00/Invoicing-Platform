import { emptyProductResponse, ProductState } from 'entities/product';
import { create } from 'zustand';

const useProductStore = create<ProductState>((set) => ({
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: emptyProductResponse,
  setSingleLoading: (loading) => set((state) => ({ ...state, isSingleLoading: loading })),
  setProducts: (products) => set((state) => ({ ...state, products })),
  setSingleProduct: (singleProduct) => set((state) => ({ ...state, singleProduct })),
}));

export default useProductStore;
