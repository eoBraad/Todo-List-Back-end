import { AppError } from './../../../../error/AppError';
import { UserRepository } from "../../Repositories/implementations/usersRepositories";


export class DeleteTaskUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(task_id: string) {
    const task = await this.userRepository.deleteTask(task_id)
    
    if(!task) {
      throw new AppError('Task not found', 404)
    }

    return task
  }
}