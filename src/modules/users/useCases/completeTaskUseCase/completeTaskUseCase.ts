import { AppError } from './../../../../error/AppError';
import { UserRepository } from "../../Repositories/implementations/usersRepositories";

export class CompleteTaskUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(task_id) {
    try {
      const taskCompleted = await this.userRepository.completeTask(task_id)

      return taskCompleted
    } catch (err) {
      if (err instanceof AppError) {
        throw new AppError(err.message, err.statusCode)
      }
    }
  }
}