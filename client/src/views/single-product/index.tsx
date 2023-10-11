import AddToCart from 'components/add-to-cart';
import PageNavigation from 'components/page-navigation';
import ProductImage from 'components/product-image';
import formatPrice from 'helpers/format-price';
import { useEffect } from 'react';
import { MdSecurity } from 'react-icons/md';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import useProductStore from 'store/useProductStore';

import getSpecificProduct from '../../api/getSpecificProduct';
import Container from './container';
import Wrapper from './wrapper';

const ProductPage = () => {
  const { id } = useParams();
  const { isSingleLoading, setSingleProduct, setSingleLoading, singleProduct } =
    useProductStore();

  useEffect(() => {
    setSingleLoading(true);
    console.log('Fetching product for id:', id);
    getSpecificProduct(id || '1').then((res) => {
      setSingleProduct(res);
      setSingleLoading(false);
    });
  }, [id]);

  if (isSingleLoading && singleProduct) {
    return <div className="page_loading">Loading.....</div>;
  }

  const { name, company, price, description, stock, image } = singleProduct;
  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <ProductImage imgs={[{ url: image }]} />
          </div>

          <div className="product-data">
            <h2>{name}</h2>

            <p className="product-data-price">
              MRP:
              <del>{formatPrice(price + 250000)}</del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day:{formatPrice(price)}
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Plotline Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? 'In Stock' : 'Not Available'}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && singleProduct && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ProductPage;
