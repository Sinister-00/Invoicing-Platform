import {Request, Response} from "express";
import * as ProductService from "../../services/product";

const getProductbyID = async (req: Request, res: Response) => {
  try {
    let {id} = req.params;
    const data = await ProductService.getProductbyID(+id);

    res.status(data.statusCode).send(data.body);
  } catch (e: any) {
    console.error(e.message);

    res.status(500).send(e.message);
  }
};

export default getProductbyID