export type Product = {
  id: string;
  name: string;
  company: string;
  price: number;
  colors: string[];
  image: string;
  description: string;
  category: string;
  dateAdded: string;
  featured: boolean;
  stock: number;
};

export interface ProductState {
  isLoading: boolean;
  isError: boolean;
  products: Product[];
  featureProducts: Product[];
  isSingleLoading: boolean;
  singleProduct: Product;
  setSingleLoading: (state: boolean) => void;
  setProducts: (products: Product[]) => void;
  setSingleProduct: (singleProduct: Product) => void;
}

export const emptyProductResponse: Product = {
  id: '',
  name: '',
  company: '',
  price: 0,
  colors: [],
  image: '',
  description: '',
  category: '',
  dateAdded: '',
  featured: false,
  stock: 0,
};
