import useFilterStore from 'store/useFilter';

import GridView from './grid';
import ListView from './list';

const ProductList = () => {
  const { filter_products, grid_view } = useFilterStore();

  if (grid_view) return <GridView products={filter_products} />;
  return <ListView products={filter_products} />;
};

export default ProductList;
