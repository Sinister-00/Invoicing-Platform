import Button from 'components/button';
import CartItem from 'components/cart-item';
import Header from 'components/header';
import formatPrice from 'helpers/format-price';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useCartStore from 'store/useCartStore';
import useUserStore from 'store/useUser';

import getCart, { Cart, emptyCart } from '../../api/getCart';
import removeAllFromCart from '../../api/removeAllFromCart';
import Wrapper from './wrapper';

const CartPage = () => {
  const { userData } = useUserStore();
  const [loading, setLoading] = useState(false);
  const { clearCart } = useCartStore();
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

  const handleClearCart = async () => {
    await removeAllFromCart();
    clearCart();
  };

  if (loading) {
    return <>Loading</>;
  }

  return (
    <>
      <Header />
      <Wrapper>
        <div className="container">
          <div className="cart-user--profile">
            <h2 className="cart-user--name">{`${userData.name}'s Cart`}</h2>
          </div>
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
            {cartData.products.map((curElem) => {
              console.log(curElem);
              return (
                <CartItem
                  tax={curElem.tax}
                  totalAmount={curElem.taxItemPrice}
                  id={curElem.id.toString()}
                  color={curElem.product.colors[1]}
                  amount={curElem.quantity}
                  product={curElem.product}
                  key={curElem.id}
                  name={curElem.product.name}
                  price={curElem.product.price}
                  image={curElem.product.image}
                />
              );
            })}
          </div>
          <hr />
          <div className="cart-two-button">
            <NavLink to="/bill">
              <Button>Buy Now </Button>
            </NavLink>
            <Button className="btn btn-clear" onClick={handleClearCart}>
              clear cart
            </Button>
          </div>

          <div className="order-total--amount">
            <div className="order-total--subdata">
              <div>
                <p>subtotal:</p>
                <p> {formatPrice(cartData.cartTotal)} </p>
              </div>
              <div>
                <p>Total Tax:</p>
                <p> {formatPrice(cartData.taxTotal / 100)} </p>
              </div>
              <hr />
              <div>
                <p>order total:</p>
                <p> {formatPrice(cartData.taxTotal / 100 + cartData.cartTotal)} </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default CartPage;
