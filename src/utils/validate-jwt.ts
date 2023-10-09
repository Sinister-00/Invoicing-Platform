import {Request, Response, NextFunction} from "express";
import {JwtPayload, verify} from "jsonwebtoken";
import "dotenv/config";
import {dbSource} from "../db";
import User from "../entities/db/user";
import {APIResponseWithoutData} from "../entities/response";
import {TJwtHeader} from "../validators/jwt";

const validateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {authorization} = req.headers as TJwtHeader;
    const authToken = authorization.split(" ")[1];
    const decoded = verify(authToken, process.env.JWT_SECRET!);

    const user = await dbSource.getRepository(User).findOneBy({
      id: (<JwtPayload>decoded).id,
    });
    if (!user) {
      throw new Error("🔑 Please login and try again.");
    }

    res.locals.user = user as User;
    next();
  } catch (err: Error | any) {
    next({
      statusCode: 401,
      body: {success: false, message: `${err.name}: ${err.message}`},
    } as APIResponseWithoutData);
  }
};

export default validateJWT