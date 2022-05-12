import { AppError } from './../../../../error/AppError';
import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {
  }

  async handle(req: Request, res: Response) {
    const {name, last_name, email, password} = req.body
      try {
        const user = await this.createUserUseCase.execute({email, last_name, name, password}) 
        return res.status(201).json({
          message: 'User success created',
          user
        })
      } catch (err) {
        if(err instanceof AppError) {
          return res.status(err.statusCode).json({
            message: err.message
          })
        }
      }
  }
}

export { CreateUserController }