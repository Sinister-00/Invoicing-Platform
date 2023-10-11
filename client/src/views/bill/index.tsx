import axios from 'axios';
import Button from 'components/button';
import Header from 'components/header';
import formatPrice from 'helpers/format-price';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useCartStore from 'store/useCartStore';

import getCart, { Cart, emptyCart } from '../../api/getCart';
import placeOrder from '../../api/postOrder';
import Wrapper from './wrapper';
import { ROUTES } from 'entities/routes';

const BillPage = () => {
  const [loading, setLoading] = useState(false);
  const [cartData, setCartData] = useState<Cart>(emptyCart);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getCart();
      console.log(data);
      setCartData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleConfirmOrder = async () => {
    const orderData = {
      products: cartData.products.map((item) => item.product.name),
      totalItems: cartData.products.length,
      subtotal: cartData.products.length,
      orderTotal: formatPrice(cartData.taxTotal / 100 + cartData.cartTotal),
      totalTax: cartData.taxTotal,
    };

    console.log(orderData);

    try {
      const response = await placeOrder();
      console.log('Order placed:', response);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  if (loading) {
    return <>Loading</>;
  }

  return (
    <>
      <Header />
      <Wrapper>
        <div className="order-total--amount">
          <h2>ORDER SUMMARY</h2>
          <div className="order-total--subdata">
            <div className="itemname">
              <h3>products:</h3>
              {cartData.products.map((item, index) => (
                <li key={index}>
                  <div className="itmss">
                    <p>{item.product.name}</p>
                    <img src={item.product.image} alt={item.product.name} />
                  </div>
                </li>
              ))}
            </div>
            <h3>Total Bill:</h3>
            <div className="inn">
              <p>Total Items:</p>

              <p className="it">{cartData.products.length}</p>
            </div>
            <div className="inn">
              <p>subtotal:</p>
              <p className="it"> {formatPrice(cartData.cartTotal)}</p>
            </div>
            <div className="inn">
              <p>Total Tax:</p>
              <p className="it"> {formatPrice(cartData.taxTotal / 100)} </p>
            </div>
            <hr />
            <div className="inn">
              <p>order total:</p>
              <p className="it">
                {formatPrice(cartData.taxTotal / 100 + cartData.cartTotal)}
              </p>
            </div>
            <p>Cash on Delivery</p>
          </div>
          <NavLink to={ROUTES.ORDER_PLACED}>
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
