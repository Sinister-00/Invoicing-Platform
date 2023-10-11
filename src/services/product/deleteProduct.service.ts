import { dbSource } from "../../db";
import Product from "../../entities/db/product";
import { APIResponseWithoutData } from "../../entities/response";

const deleteProduct = async (
  id: number
): Promise<APIResponseWithoutData> => {
  /* Delete a specific product */
  const productRepository = await dbSource.getRepository(Product);
  const product = await productRepository.findBy({
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
  productRepository.remove(product);
  return {
    statusCode: 200,
    body: { success: true, message: "🛒 Deleted the product successfully" },
  };
};

export { deleteProduct };
