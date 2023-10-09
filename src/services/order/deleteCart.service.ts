import {dbSource} from "../../db";
import CartItem from "../../entities/db/cart-items";
import User from "../../entities/db/user";
import {APIResponse} from "../../entities/response";

const deleteCartItems = async (
  user: User
): Promise<APIResponse<undefined>> => {
  await dbSource.getRepository(CartItem).delete({
    user: user,
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
): Promise<APIResponse<undefined>> => {
  await dbSource.getRepository(CartItem).delete({
    user: user,
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

export {deleteCartItems, deleteSpecificCartItems};
