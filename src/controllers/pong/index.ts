import { Request, Response } from "express";

const handlePong = (req: Request, res: Response) => {
  res.status(200).send({
    statusCode: 201,
    body: {
      success: true,
      message: "🙎 Pong",
    },
  });
};

export default handlePong 