import {dbSource} from "../../db";
import CartItem from "../../entities/db/cart-items";
import Product from "../../entities/db/product";
import Service from "../../entities/db/service";
import User from "../../entities/db/user";
import {APIResponse} from "../../entities/response";
import {TAddCartSchema} from "../../validators/cart";

const addCart = async (
  data: TAddCartSchema,
  userModel: User
): Promise<APIResponse<Object>> => {
  if (!data.product_id && !data.service_id) {
    return {
      statusCode: 404,
      body: {
        success: false,
        message: "🔗 Please provide a product or service ID ",
      },
    };
  }

  if (data.product_id && data.service_id) {
    return {
      statusCode: 400,
      body: {
        success: false,
        message:
          "🔗 Please provide only one item. Either product or service ID",
      },
    };
  }

  let item;
  if (data.product_id) {
    item = await dbSource.getRepository(Product).findOneBy({
      id: data.product_id,
    });
  } else {
    item = await dbSource.getRepository(Service).findOneBy({
      id: data.service_id,
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
  data.product_id ? (cartItem.product = item) : (cartItem.service = item);

  const cartRepository = await dbSource.getRepository(CartItem);
  const addedItem = await cartRepository.save(cartItem);
  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🛍️ Added the product successfully",
      data: {
        id: addedItem.id,
        item: data.product_id ? cartItem.product : cartItem.service,
        type: data.product_id ? "product" : "service",
      },
    },
  };
};

export {addCart};
