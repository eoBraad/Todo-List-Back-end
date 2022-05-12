import { Request, Response } from 'express';
import { AppError } from '../../../../error/AppError';
import { CreateTaskUseCase } from './createTaskUseCase';

export class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const {id, task_name, task_description} = req.body
      const tasks = await this.createTaskUseCase.execute({id, task_description, task_name})
      return res.status(201).json({
        message: 'Task succes Created',
        task: tasks
      })
    } catch (err){
       if(err instanceof AppError) {
          return res.status(err.statusCode).json({
            message: err.message
          })
       }
    }
  }
}