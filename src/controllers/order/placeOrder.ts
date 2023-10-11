import { Request, Response } from "express";
import { placeOrder as placeOrderService } from "../../services/order";

const placeOrder = async (req: Request, res: Response) => {
  try {
    const data = await placeOrderService(res.locals.user);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
};

export default placeOrder