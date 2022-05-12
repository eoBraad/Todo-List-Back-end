import { AppError } from '../../../../error/AppError';
import { UserRepository } from '../../Repositories/implementations/usersRepositories';
import { IcreateTaskDTO } from './../../DTOS/ICreateTaskDTO';

export class CreateTaskUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({id, task_description, task_name}: IcreateTaskDTO) {
    const userAlreadyExist = await this.userRepository.findUserById(id)

    if(userAlreadyExist) {
      const tasks = await this.userRepository.createTask({id, task_description, task_name})
      return tasks
    }

     throw new AppError('User not exists', 401)
  }
}