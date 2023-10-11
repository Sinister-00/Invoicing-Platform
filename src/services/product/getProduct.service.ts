import { dbSource } from "../../db";
import Product from "../../entities/db/product";
import { APIResponse } from "../../entities/response";

const getAll = async (
  page: string
): Promise<APIResponse<Array<Product>>> => {
  /* fetch all products here */
  if (+page < 1) {
    return {
      statusCode: 400,
      body: { success: false, message: "🛒 Page Number should start from 1" },
    };
  }
  const limit: number = 15;
  const skip: number = (+page - 1) * limit;
  //console.log(typeof skip);
  const products = await dbSource.getRepository(Product).find({
    order: {
      id: "ASC",
    },
    skip: skip,
    take: limit,
  });
  return {
    statusCode: 200,
    body: { success: true, message: "🛒 Fetched all products", data: products },
  };
};

const getProductbyID = async (
  id: number
): Promise<APIResponse<Array<Product>>> => {
  /* fetch the specific product here */
  const product = await dbSource.getRepository(Product).findBy({
    id: id.toString(),
  });
  if (product.length === 0) {
    return {
      statusCode: 404,
      body: {
        success: false,
        message: "🛒 No product found with the ID",
      },
    };
  }
  return {
    statusCode: 200,
    body: { success: true, message: "🛒 Fetched the product", data: product },
  };
};

export { getAll, getProductbyID };
