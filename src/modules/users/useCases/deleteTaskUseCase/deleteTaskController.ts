import { AppError } from './../../../../error/AppError';
import { Request, Response } from 'express';
import { DeleteTaskUseCase } from './deleteTaskUseCase';
export class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  async handle(req: Request, res: Response) {
    const { task_id } = req.body

    try {
      const task = await this.deleteTaskUseCase.execute(task_id)

      return res.status(200).json(task)
    } catch (err) {
      if(err instanceof AppError) {
        return res.status(err.statusCode).json({
          message: err.message
        })
      }
    }
  } 
}