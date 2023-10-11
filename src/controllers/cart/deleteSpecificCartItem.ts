import { Request, Response } from "express";
import * as CartService from "../../services/cart";

const deleteSpecificCartItems = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await CartService.deleteSpecificCartItems(
      res.locals.user,
      +id
    );

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    console.error(e.message);

    res.status(500).send(e.message);
  }
};

export default deleteSpecificCartItems