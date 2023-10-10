import { Product } from './product';

export interface FilterState {
  filter_products: Product[];
  all_products: Product[];
  grid_view: boolean;
  sorting_value: string;
  filters: {
    text: string;
    category: string;
    company: string;
    color: string;
    maxPrice: number;
    price: number;
    minPrice: number;
  };
}

export interface FilterActions {
  setGridView: () => void;
  setListView: () => void;
  sorting: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  updateFilterValue: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  clearFilters: () => void;
  loadFilterProducts: (products: Product[]) => void;
  filterAndSortProducts: () => void;
}
