import { Equal } from "typeorm";
import { dbSource } from "../../db";
import CartItem from "../../entities/db/cart-items";
import User from "../../entities/db/user";
import { APIResponse } from "../../entities/response";
import { AllCartItems } from "../../entities/taxed-items";
import itemTaxCalculator from "../tax";

const getCartItems = async (
  user: User
): Promise<APIResponse<AllCartItems>> => {
  const items = await dbSource.getRepository(CartItem).find({
    relations: {
      product: true,
    },
    where: {
      user: Equal(user),
    },
    order: {
      id: "ASC",
    },
  });
  if (!items) {
    return {
      statusCode: 200,
      body: { success: true, message: "🛍️ Your cart is empty" },
    };
  }
  const result: AllCartItems = await itemTaxCalculator(items);

  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🛍️ Fetched all items from cart successfully",
      data: result,
    },
  };
};

export { getCartItems };