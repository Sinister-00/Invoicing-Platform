import FilterSection from 'components/filter-section';
import ProductList from 'components/product-list';
import Sort from 'components/sort';
import React from 'react';
import useFilterStore from 'store/useFilter';
import useProductStore from 'store/useProductStore';

import Wrapper from './wrapper';

const ProductsPage = () => {
  const { products } = useProductStore();
  const { setProducts } = useFilterStore();

  console.log(products);

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default ProductsPage;
