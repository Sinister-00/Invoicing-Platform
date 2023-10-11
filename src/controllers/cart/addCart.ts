import { Request, Response } from "express";
import * as CartService from "../../services/cart";

const addCart = async (req: Request, res: Response) => {
  try {
    const data = await CartService.addCart(req.body, res.locals.user);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    console.error(e.message);

    res.status(500).send(e.message);
  }
};

export default addCart