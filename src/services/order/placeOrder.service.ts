import { Equal } from "typeorm";
import { dbSource } from "../../db";
import CartItem from "../../entities/db/cart-items";
import Order from "../../entities/db/order";
import User from "../../entities/db/user";
import { APIResponse } from "../../entities/response";
import { AllCartItems } from "../../entities/taxed-items";
import itemTaxCalculator from "../tax";
import addOrderItems from "./addOrderItems.service";
import { deleteCartItems } from "./deleteCart.service";

const placeOrder = async (user: User): Promise<APIResponse<Object>> => {
  const orderRepository = await dbSource.getRepository(Order);
  const items = await dbSource.getRepository(CartItem).find({
    relations: {
      product: true,
    },
    where: {
      user: {
        id: Equal(user.id)
      },
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

  const newOrder = new Order();
  newOrder.user = user;
  newOrder.totalAmount = result.cartTotal;
  const orderDetails = await orderRepository.save(newOrder);

  await addOrderItems(result, newOrder);

  await deleteCartItems(user);

  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🚚 Order placed successfully",
      data: { id: orderDetails.id, totalAmount: orderDetails.totalAmount },
    },
  };
};

export default placeOrder;