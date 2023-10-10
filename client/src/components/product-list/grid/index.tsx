import Product from 'components/home-product';
import React from 'react';
import styled from 'styled-components';

import Wrapper from './wrapper';

const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </Wrapper>
  );
};

export default GridView;
