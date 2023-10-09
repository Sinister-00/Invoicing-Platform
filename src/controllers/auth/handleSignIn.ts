import {Request, Response} from "express";
import authService from "../../services/auth";

const handleSignIn = async (req: Request, res: Response) => {
  try {
    const data = await authService.signIn(req.body);
    let resBody: any = data.body;
    delete resBody.data?.password;
    res.status(data.statusCode).send(resBody);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
};

export default handleSignIn