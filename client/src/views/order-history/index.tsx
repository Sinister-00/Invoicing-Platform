import axios from 'axios';
import Header from 'components/header';
import formatPrice from 'helpers/format-price';
import React, { useEffect, useState } from 'react';

import Wrapper from './wrapper';

// const API = 'https://plotline-project.onrender.com/orders'
const API = 'https://localhost:4000/orders';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState<any[]>();

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       const response = await axios.get(API);
  //       setOrders(response.data);
  //     } catch (error) {
  //       console.error('Error fetching orders:', error);
  //     }
  //   };
  //   fetchOrders();
  // }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <h2>ORDER HISTORY</h2>
        <div className="order-list">
          {orders.map((order, index) => (
            <div className="order-card" key={index}>
              <h3>Order {index + 1}</h3>
              <div className="order-details">
                <div className="order-items">
                  <h4>Products:</h4>
                  <ul>
                    {order.products.map((product, index) => (
                      <li key={index}>{product}</li>
                    ))}
                  </ul>
                </div>
                <div className="order-total">
                  <h4>Total Items:</h4>
                  <p>{order.totalItems}</p>
                  <h4>Subtotal:</h4>
                  <p> {formatPrice(order.subtotal)} </p>
                  <h4>Total Tax:</h4>
                  <p> {formatPrice(order.totalTax)} </p>
                  <h4>Order Total:</h4>
                  <p> {formatPrice(order.orderTotal)} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default OrderHistoryPage;
