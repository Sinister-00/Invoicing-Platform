import {Request, Response} from "express";
import * as ProductService from "../../services/product";

const addProduct = async (req: Request, res: Response) => {
  try {
    const data = await ProductService.addProduct(req.body);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    console.error(e.message);

    res.status(500).send(e.message);
  }
};

export default addProduct