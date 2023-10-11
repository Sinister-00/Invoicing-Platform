import { Router } from "express";
import { jwtHeader } from "../validators/jwt";
import validateJWT from "../utils/validate-jwt";
import { getProduct } from "../validators/product";
import requestValidator from "../validators/request";
import * as orderController from "../controllers/order";

const orderRouter = Router();

orderRouter.get(
  "/get/all",
  requestValidator.validateHeaders(jwtHeader),
  validateJWT,
  orderController.getOrders
);

orderRouter.get(
  "/get/items/:id",
  requestValidator.validateHeaders(jwtHeader),
  validateJWT,
  requestValidator.validateParams(getProduct),
  orderController.getOrderItems
);

orderRouter.post(
  "/place",
  requestValidator.validateHeaders(jwtHeader),
  validateJWT,
  orderController.placeOrder
);

export { orderRouter as default };