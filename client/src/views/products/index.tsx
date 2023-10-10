import FilterSection from 'components/filter-section';
import ProductList from 'components/product-list';
import Sort from 'components/sort';
import React from 'react';

import Wrapper from './wrapper';

const ProductsPage = () => {
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
