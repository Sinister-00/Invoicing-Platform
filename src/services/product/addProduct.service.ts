import {dbSource} from "../../db";
import Product from "../../entities/db/product";
import {APIResponse} from "../../entities/response";
import {TAddProductSchema} from "../../validators/product";

const addProduct = async (
  data: TAddProductSchema
): Promise<APIResponse<Product>> => {
  /* Create new product here */
  const productsRepository = await dbSource.getRepository(Product);
  const product = await productsRepository.findOneBy({name: data.name});
  if (product) {
    return {
      statusCode: 400,
      body: {
        success: false,
        message: "🛒 Product with that name is already there",
      },
    };
  }
  const savedProduct = await productsRepository.save(data);
  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🛒 Added the product successfully",
      data: savedProduct,
    },
  };
};

export {addProduct};
