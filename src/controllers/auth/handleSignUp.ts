import authService from "../../services/auth";
import { Request, Response } from "express";

const handleSignUp = async (req: Request, res: Response) => {
  try {
    const data = await authService.signUp(req.body);
    let resBody: any = data.body;
    delete resBody.data?.password;
    res.status(data.statusCode).send(resBody);
  } catch (e: any) {
    console.error(e.message);
    res.status(500).send(e.message);
  }
};


export default handleSignUp