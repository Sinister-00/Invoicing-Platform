import { dbSource } from "../../db";
import Order from "../../entities/db/order";
import OrderItem from "../../entities/db/order-item";
import { AllCartItems, CartTaxItem } from "../../entities/taxed-items";

const addOrderItems = async (
  result: AllCartItems,
  newOrder: Order
): Promise<void> => {

  const orderItemsRepository = await dbSource.getRepository(OrderItem);

  result.products.forEach(async (item: CartTaxItem) => {
    try {
      const product = new OrderItem();
      product.order = newOrder;
      product.product = item.product;
      product.quantity = item.quantity;
      product.tax = item.tax;
      product.price = item.product.price;
      await orderItemsRepository.save(product);
    } catch (err: any) {
      console.error(err.message);
    }
  });

  console.info("Added all products from cart to order items");
};
export default addOrderItems;