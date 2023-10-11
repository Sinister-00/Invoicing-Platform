import { Equal } from "typeorm";
import { dbSource } from "../../db";
import Order from "../../entities/db/order";
import User from "../../entities/db/user";
import { APIResponse } from "../../entities/response";

const getOrders = async (user: User): Promise<APIResponse<Order[]>> => {
  const orders = await dbSource.getRepository(Order).find({
    where: {
      user: Equal(user),
    },
    order: {
      id: "ASC",
    },
  });

  if (!orders) {
    return {
      statusCode: 404,
      body: {
        success: false,
        message: "🚚 Your order history is empty",
      },
    };
  }

  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🚚 Fetched all order history successfully",
      data: orders,
    },
  };
};

export default getOrders;