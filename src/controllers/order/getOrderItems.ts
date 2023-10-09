import {Request, Response} from "express";
import {getOrderItems as getOrderItemsService} from "../../services/order";

const getOrderItems = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const data = await getOrderItemsService(res.locals.user, +id);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
};

export default getOrderItems