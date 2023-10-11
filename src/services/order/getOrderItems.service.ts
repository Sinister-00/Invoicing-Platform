import { Equal } from "typeorm";
import { dbSource } from "../../db";
import Order from "../../entities/db/order";
import User from "../../entities/db/user";
import { APIResponse } from "../../entities/response";

const getOrderItems = async (
  user: User,
  id: number
): Promise<APIResponse<Order[]>> => {
  const orderItems = await dbSource.getRepository(Order).find({
    where: {
      id: Equal(id),
      user: Equal(user),
    },
    relations: {
      orderItems: true,
    },
    order: {
      id: "ASC",
    },
  });

  if (orderItems.length === 0) {
    return {
      statusCode: 404,
      body: {
        success: false,
        message: "🚚 Your order has no item within it or it is not accessible",
      },
    };
  }

  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🚚 Fetched all order items successfully",
      data: orderItems,
    },
  };
};

export default getOrderItems;