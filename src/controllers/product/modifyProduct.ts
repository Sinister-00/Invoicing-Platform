import { Request, Response } from "express";
import * as ProductService from "../../services/product";

const modifyProduct = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    const data = await ProductService.modifyProduct(+id, req.body);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    console.error(e.message);

    res.status(500).send(e.message);
  }
};

export default modifyProduct