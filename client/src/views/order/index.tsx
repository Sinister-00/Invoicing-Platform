import Button from 'components/button';
import Header from 'components/header';
import { NavLink } from 'react-router-dom';

import Wrapper from './wrapper';

const OrderPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <div>
            <h3>Order Confirmed</h3>
            <p>Your order will be Delivered soon!</p>

            <NavLink to="/products">
              <Button>Continue Shopping</Button>
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default OrderPage;
