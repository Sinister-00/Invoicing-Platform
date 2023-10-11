import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "yup";
import errorToList from "../utils/error-to-list";
import { APIResponseWithoutData } from "../entities/response";

const validateQuery = (schema: ObjectSchema<any>) =>
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      await schema.validate(req.query, { abortEarly: false });
      next()
    }
    catch (e: any) {
      const errorList = errorToList(e)
      next({
        statusCode: 404,
        body: {
          message: errorList,
          success: false,
        }
      } as APIResponseWithoutData)
    }
  }

const validateBody = (schema: ObjectSchema<any>) =>
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next()
    }
    catch (e: any) {
      const errorList = errorToList(e.errors)
      next({
        statusCode: 404,
        body: {
          message: errorList,
          success: false,
        }
      } as APIResponseWithoutData)
    }
  }

const validateParams = (schema: ObjectSchema<any>) =>
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      await schema.validate(req.params, { abortEarly: false });
      next()
    }
    catch (e: any) {
      const errorList = errorToList(e)
      next({
        statusCode: 404,
        body: {
          message: errorList,
          success: false,
        }
      } as APIResponseWithoutData)
    }
  }

const validateHeaders = (schema: ObjectSchema<any>) =>
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      await schema.validate(req.headers, { abortEarly: false });
      next()
    }
    catch (e: any) {
      const errorList = errorToList(e)
      next({
        statusCode: 404,
        body: {
          message: errorList,
          success: false,
        }
      } as APIResponseWithoutData)
    }
  }

export default {
  validateBody,
  validateHeaders,
  validateParams,
  validateQuery
}