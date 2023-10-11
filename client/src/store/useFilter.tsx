import { FilterActions, FilterState } from 'entities/filter';
import { Product } from 'entities/product';
import { create } from 'zustand';

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: 'lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const useFilterStore = create<FilterState & FilterActions>((set) => ({
  ...initialState,
  setGridView: () => set({ grid_view: true }),
  setListView: () => set({ grid_view: false }),
  setProducts: (products) => set((state) => ({ ...state, filter_products: products })),
  sorting: (event) => set({ sorting_value: event.target.value }),
  updateFilterValue: (event) => {
    const { name, value } = event.target;
    set((state) => ({
      filters: {
        ...state.filters,
        [name]: value,
      },
    }));
  },
  clearFilters: () =>
    set((state) => ({
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.maxPrice,
        minPrice: state.filters.maxPrice,
      },
    })),
  // Effects
  loadFilterProducts: (products) => {
    const priceArr = products.map((curElem) => curElem.price);
    const maxPrice = Math.max(...priceArr);
    set({
      filter_products: [...products],
      all_products: [...products],
      filters: {
        ...initialState.filters,
        maxPrice,
        price: maxPrice,
      },
    });
  },

  filterAndSortProducts: () =>
    set((state) => {
      const { all_products, filters, sorting_value } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, color, price } = filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text.toLowerCase());
        });
      }

      if (category !== 'all') {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category,
        );
      }

      if (company !== 'all') {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase(),
        );
      }

      if (color !== 'all') {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color),
        );
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price == price);
      } else {
        tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price <= price);
      }

      const sortingProducts = (a: Product, b: Product) => {
        if (sorting_value === 'lowest') {
          return a.price - b.price;
        }
        if (sorting_value === 'highest') {
          return b.price - a.price;
        }
        if (sorting_value === 'a-z') {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === 'z-a') {
          return b.name.localeCompare(a.name);
        } else {
          return a.price - b.price;
        }
      };

      const newSortData = tempFilterProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };
    }),
}));

export default useFilterStore;
