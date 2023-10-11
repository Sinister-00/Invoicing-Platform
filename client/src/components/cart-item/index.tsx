import { type CartItem as TCartItem } from 'entities/cart';
import formatPrice from 'helpers/format-price';
import { FaTrash } from 'react-icons/fa';
import useCartStore from 'store/useCartStore';

import removeFromCart from '../../api/removeFromCart';
import Toggle from './toggle';

type CartItemProps = TCartItem & {
  image: string;
  price: number;
  tax: number;
  totalAmount: number;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  totalAmount,
  tax,
  name,
  image,
  price,
  amount,
  product,
}) => {
  const { removeItem, setDecrease, setIncrement } = useCartStore();
  const handleClick = async () => {
    await removeFromCart(id);
    removeItem(id);
  };

  return (
    <div className="cart_heading grid grid-six-column">
      <div className="cart-image--name">
        <figure>
          <img src={image} alt={id} />
        </figure>
        <div>
          <p>{name}</p>
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
        <p>{formatPrice(tax / 100)} </p>
      </div>

      <div className="cart-hide">
        <p> {formatPrice(totalAmount * amount + tax / 100)} </p>
      </div>

      <button onClick={handleClick}>
        <FaTrash className="remove_icon" />
      </button>
    </div>
  );
};

export default CartItem;
