import Button from 'components/button';
import CartAmountToggle from 'components/cart-amount-toggle';
import { Product } from 'entities/product';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useCartStore from 'store/useCartStore';

import addToCart from '../../api/addToCart';
import Wrapper from './wrapper';

type TAddToCart = {
  product: Product;
};

const AddToCart: React.FC<TAddToCart> = ({ product }) => {
  const { addToCart: addToCartStore } = useCartStore();
  const { id, name, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  console.log(color);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const handleClick = async () => {
    await addToCart(id, amount);
    addToCartStore(id, name, color, amount, product);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? 'btnStyle active' : 'btnStyle'}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={handleClick}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

export default AddToCart;
