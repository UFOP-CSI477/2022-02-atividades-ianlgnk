import { Request, Response, NextFunction } from "express";
import jwtService from "jsonwebtoken";
import { APIError } from "../../error";

export const jwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const jwt = req.header("Authorization") || "";
  const privateKey = "estagionow";

  jwtService.verify(jwt, privateKey, (err: any, userInfo: any) => {
    if (err) {
      res
        .status(401)
        .json({ msg: "JWT Middleware failed. Invalid token!", statusCode: 401 })
        .end();
      return;
    }

    next();
  });
};
