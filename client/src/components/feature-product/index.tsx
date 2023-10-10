import useProductStore from 'store/useProductStore';
import Wrapper from './wrapper';
import Product from 'components/home-product';

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductStore();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default FeatureProduct;
