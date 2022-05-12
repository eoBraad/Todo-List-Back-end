import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: Function) {
  const token = req.headers['authorization']

  verify(token, process.env.SECRET_JWT, (err, tokenInfo) => {
    if (err) {
      return res.status(404).json({
        message: err.message
      })
    }

    req.body.user = tokenInfo
    next();
  })
}