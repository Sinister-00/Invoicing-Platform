import { dbSource } from "../../db";
import CartItem from "../../entities/db/cart-items";
import Product from "../../entities/db/product";
import User from "../../entities/db/user";
import { APIResponse } from "../../entities/response";
import { TAddCartSchema } from "../../validators/cart";

const addCart = async (
  data: TAddCartSchema,
  userModel: User
): Promise<APIResponse<Object>> => {
  if (!data.product_id) {
    return {
      statusCode: 404,
      body: {
        success: false,
        message: "🔗 Please provide a product ID",
      },
    };
  }

  if (data.product_id) {
    return {
      statusCode: 400,
      body: {
        success: false,
        message:
          "🔗 Please provide only one item. Either product ID",
      },
    };
  }

  let item;
  if (data.product_id) {
    item = await dbSource.getRepository(Product).findOneBy({
      id: data.product_id.toString(),
    });
  }
  if (!item) {
    return {
      statusCode: 404,
      body: {
        success: false,
        message: "📦 No product or service is there with the ID",
      },
    };
  }

  const cartItem = new CartItem();
  cartItem.quantity = data.quantity;
  cartItem.user = userModel;
  cartItem.product = item as Product

  const cartRepository = await dbSource.getRepository(CartItem);
  const addedItem = await cartRepository.save(cartItem);
  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🛍️ Added the product successfully",
      data: {
        id: addedItem.id,
        item: cartItem.product,
        type: "product",
      },
    },
  };
};

export { addCart };