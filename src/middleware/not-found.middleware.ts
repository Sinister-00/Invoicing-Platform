/* eslint-disable no-unused-vars */

import { Request, Response, NextFunction } from "express";
import { ResponseBodyWithoutData } from "../entities/response";

const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const message = "🗑️ Resource not found";

  res
    .status(404)
    .send({ success: false, message: message } as ResponseBodyWithoutData);
};

export { notFoundHandler };
