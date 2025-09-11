import { Response, Request } from "express";
const testFunc = async (_: Request, res: Response) => {
  res.status(200).send({ message: "healthy" });
};

export { testFunc };
