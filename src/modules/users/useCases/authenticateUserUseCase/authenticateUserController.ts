import { Request, Response } from "express";
import { AppError } from "../../../../error/AppError";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}
  async handle(req: Request, res: Response) {
    const {email, password} = req.body 

    try {
      const {token, user} = await this.authenticateUserUseCase.execute({email, password})

      return res.status(200).json({
        token,
        user
      })
    } catch (err){
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          message: err.message
        })
      }
    }  
  }
}

export { AuthenticateUserController }