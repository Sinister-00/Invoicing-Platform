import axios from 'axios';
import Button from 'components/button';
import Header from 'components/header';
import formatPrice from 'helpers/format-price';
import { NavLink } from 'react-router-dom';
import useCartStore from 'store/useCartStore';

import Wrapper from './wrapper';

const BillPage = () => {
  const { cart, total_price, tax_fee, total_item } = useCartStore();

  const handleConfirmOrder = async () => {
    const orderData = {
      products: cart.map((item) => item.name),
      totalItems: total_item,
      subtotal: total_price,
      totalTax: tax_fee,
      orderTotal: total_price + tax_fee,
    };

    // try {
    //   const response = await axios.post(
    //     'https://plotline-project.onrender.com/orders',
    //     orderData,
    //   );
    //   console.log('Order placed:', response.data);
    // } catch (error) {
    //   console.error('Error placing order:', error);
    // }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <div className="order-total--amount">
          <h2>ORDER SUMMARY</h2>
          <div className="order-total--subdata">
            <div className="itemname">
              <h3>products:</h3>
              {cart.map((item, index) => (
                <li key={index}>
                  <div className="itmss">
                    <p>{item.name}</p>
                    {/* <img src={item.image} alt={item.name} /> */}
                  </div>
                </li>
              ))}
            </div>
            <h3>Total Bill:</h3>
            <div className="inn">
              <p>Total Items:</p>

              <p className="it">{total_item}</p>
            </div>
            <div className="inn">
              <p>subtotal:</p>
              <p className="it"> {formatPrice(parseInt(total_price))} </p>
            </div>
            <div className="inn">
              <p>Total Tax:</p>
              <p className="it">{formatPrice(parseInt(tax_fee))} </p>
            </div>
            <hr />
            <div className="inn">
              <p>order total:</p>
              <p className="it">
                {' '}
                {formatPrice(parseInt(tax_fee) + parseInt(total_price))}{' '}
              </p>
            </div>
            <p>Cash on Delivery</p>
          </div>
          <NavLink to="/orderplaced">
            <Button onClick={handleConfirmOrder} className="btn">
              Confirm Order
            </Button>
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
};

export default BillPage;
