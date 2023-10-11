import { Router } from "express";
import authController from "../controllers/auth";
import requestValidator from "../validators/request";
import { signupSchema, signInSchema } from "../validators/auth";
import handlePong from "../controllers/pong";

const authRouter = Router();

authRouter.get(
  "/",
  handlePong
);

authRouter.post(
  "/signup",
  requestValidator.validateBody(signupSchema),
  authController.handleSignUp
);

authRouter.post(
  "/signin",
  requestValidator.validateBody(signInSchema),
  authController.handleSignIn
);

export default authRouter;
