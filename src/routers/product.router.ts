import express from "express";

import * as productController from "../controllers/product";
import { jwtHeader } from "../validators/jwt";
import { addProductSchema, getProduct, modifyProduct } from "../validators/product";
import requestValidator from "../validators/request";
import validateJWT from "../utils/validate-jwt";
import handlePong from "../controllers/pong";


const productRouter = express.Router();

productRouter.get(
  "/",
  handlePong
);

productRouter.get(
  "/all/:id",
  requestValidator.validateParams(getProduct),
  productController.getAll
);

productRouter.get(
  "/specific/:id",
  requestValidator.validateParams(getProduct),
  productController.getProductbyID
);

productRouter.post(
  "/add",
  requestValidator.validateHeaders(jwtHeader),
  validateJWT,
  requestValidator.validateBody(addProductSchema),
  productController.addProduct
);

productRouter.patch(
  "/modify/:id",
  requestValidator.validateHeaders(jwtHeader),
  validateJWT,
  requestValidator.validateParams(getProduct),
  requestValidator.validateBody(modifyProduct),
  productController.modifyProduct
);

productRouter.delete(
  "/delete/:id",
  requestValidator.validateHeaders(jwtHeader),
  validateJWT,
  requestValidator.validateParams(getProduct),
  productController.deleteProduct
);

export { productRouter as default };
