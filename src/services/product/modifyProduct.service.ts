import {dbSource} from "../../db";
import Product from "../../entities/db/product";
import {APIResponse} from "../../entities/response";
import {TModifyProductSchema} from "../../validators/product";

const modifyProduct = async (
  id: number,
  data: TModifyProductSchema
): Promise<APIResponse<undefined>> => {
  /* Delete a specific product */
  if (!data.name && !data.price) {
    return {
      statusCode: 400,
      body: {
        success: false,
        message: "👨‍🔧 No data was provided to update",
      },
    };
  }
  const productRepository = await dbSource.getRepository(Product);
  const product = await productRepository.findBy({
    id: id,
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
  await productRepository.update({id: id}, data);
  return {
    statusCode: 200,
    body: {success: true, message: "🛒 Modified the product successfully"},
  };
};

export {modifyProduct};
