import Product from 'components/home-product';
import { Product as TProduct } from 'entities/product';

import Wrapper from './wrapper';

const GridView = ({ products }: { products: TProduct[] }) => {
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
