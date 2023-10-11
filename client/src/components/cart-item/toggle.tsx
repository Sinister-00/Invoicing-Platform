import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

type ToggleProps = {
  amount: number;
  setDecrease: () => void;
  setIncrease: () => void;
};

const Toggle: React.FC<ToggleProps> = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Toggle;
