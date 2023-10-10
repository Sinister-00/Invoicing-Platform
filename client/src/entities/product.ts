export interface Product {
  id: number;
  name: string;
  featured: boolean;
  // Add other product properties here
}

export interface ProductState {
  isLoading: boolean;
  isError: boolean;
  products: Product[];
  featureProducts: Product[];
  isSingleLoading: boolean;
  singleProduct: Product | null;
  getProducts: (url: string) => Promise<void>;
  getSingleProduct: (url: string) => Promise<void>;
}
