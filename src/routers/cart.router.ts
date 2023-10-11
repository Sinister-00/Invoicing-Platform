import * as cartController from "../controllers/cart";
import requestValidator from "../validators/request";
import { jwtHeader } from "../validators/jwt";
import { getProduct } from "../validators/product";
import { addCart } from "../validators/cart";
import validateJWT from "../utils/validate-jwt";
import { Router } from "express";

const cartRouter = Router();

cartRouter.get(
  "/get/all",
  requestValidator.validateHeaders(jwtHeader),
  validateJWT,
  cartController.getCartItems
);

cartRouter.post(
  "/add",
  requestValidator.validateHeaders(jwtHeader),
  validateJWT,
  requestValidator.validateBody(addCart),
  cartController.addCart
);

cartRouter.delete(
  "/delete/all",
  requestValidator.validateHeaders(jwtHeader),
  validateJWT,
  cartController.deleteCartItems
);

cartRouter.delete(
  "/delete/specific/:id",
  requestValidator.validateHeaders(jwtHeader),
  validateJWT,
  requestValidator.validateParams(getProduct),
  cartController.deleteSpecificCartItems
);

export { cartRouter as default };