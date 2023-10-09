import {Request, Response} from "express";
import {getOrders as getOrderService} from "../../services/order";

const getOrders = async (req: Request, res: Response) => {
  try {
    const data = await getOrderService(res.locals.user);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
};

export default getOrders