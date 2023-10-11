import { dbSource } from "../../db";
import User from "../../entities/db/user";
import CartItem from "../../entities/db/cart-items";
import { APIResponseWithoutData } from "../../entities/response";
import { Equal } from "typeorm";

const deleteCartItems = async (
  user: User
): Promise<APIResponseWithoutData> => {
  await dbSource.getRepository(CartItem).delete({
    user: {
      id: Equal(user.id)
    },
  });

  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🛍️ Deleted all items from cart successfully",
    },
  };
};

const deleteSpecificCartItems = async (
  user: User,
  id: number
): Promise<APIResponseWithoutData> => {
  await dbSource.getRepository(CartItem).delete({
    user: {
      id: Equal(user.id)
    },
    id: id,
  });

  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🛍️ Deleted the item from cart successfully",
    },
  };
};

export { deleteCartItems, deleteSpecificCartItems };
