import CartItem from "./db/cart-items";

type CartTaxItem = CartItem & {
  tax: number;
  taxItemPrice: number;
  itemTotal: number;
};

type AllCartItems = {
  products: CartTaxItem[];
  services: CartTaxItem[];
  cartTotal: number;
  taxTotal: number;
};

export {CartTaxItem, AllCartItems};
