import formatPrice from 'helpers/format-price';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import useCartStore from 'store/useCartStore';

import Toggle from './toggle';

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement, tax } = useCartStore();

  return (
    <div className="cart_heading grid grid-six-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p> {formatPrice(price)}</p>
      </div>

      <Toggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />

      <div className="cart-hide">
        <p>{formatPrice(price * amount * parseInt(tax))} </p>
      </div>

      <div className="cart-hide">
        <p> {formatPrice(price * amount) + price * amount * parseInt(tax)} </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
