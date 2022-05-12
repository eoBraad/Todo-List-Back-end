import { AppError } from './../../../../error/AppError';
import { Request, Response } from 'express';
import { CompleteTaskUseCase } from './completeTaskUseCase';

export class CompleteTaskController {
  constructor(private completeTaskUseCase: CompleteTaskUseCase) {}

  async handle(req: Request, res: Response) {
    const { task_id } = req.body

    try {
      const completedTask = await this.completeTaskUseCase.execute(task_id)

      return res.status(202).json({
        message: 'Task success updated',
        task: completedTask
      })
    } catch (err) {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          message: err.message
        })
      } 
    }
  }
}