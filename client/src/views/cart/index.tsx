import Button from 'components/button';
import CartItem from 'components/cart-item';
import Header from 'components/header';
import formatPrice from 'helpers/format-price';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useCartStore from 'store/useCartStore';

import Wrapper from './wrapper';

const CartPage = () => {
  const { cart, clearCart, total_price, tax_fee } = useCartStore();
  const isAuthenticated = false;
  const user = {};

  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          {isAuthenticated && (
            <div className="cart-user--profile">
              <img src={user.profile} alt={user.name} />
              <h2 className="cart-user--name">{user.name}</h2>
            </div>
          )}
          <div className="cart_heading grid grid-six-column">
            <p>Item</p>
            <p className="cart-hide">Price</p>
            <p>Quantity</p>
            <p className="cart-hide">Tax</p>
            <p className="cart-hide">Subtotal</p>
            <p>Remove</p>
          </div>
          <hr />
          <div className="cart-item">
            {cart.map((curElem) => {
              console.log(curElem);
              return <CartItem key={curElem.id} {...curElem} />;
            })}
          </div>
          <hr />
          <div className="cart-two-button">
            <NavLink to="/bill">
              <Button>Buy Now </Button>
            </NavLink>
            <Button className="btn btn-clear" onClick={clearCart}>
              clear cart
            </Button>
          </div>

          {/* order total_amount */}
          <div className="order-total--amount">
            <div className="order-total--subdata">
              <div>
                <p>subtotal:</p>
                <p> {formatPrice(parseInt(total_price))} </p>
              </div>
              <div>
                <p>Total Tax:</p>
                <p> {formatPrice(parseInt(tax_fee))} </p>
              </div>
              <hr />
              <div>
                <p>order total:</p>
                <p> {formatPrice(parseInt(tax_fee) + parseInt(total_price))} </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default CartPage;
