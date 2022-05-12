import { CreateTaskController } from './createTaskController';
import { CreateTaskUseCase } from './createTaskUseCase';
import { UserRepository } from "../../Repositories/implementations/usersRepositories";

const userRepository = new UserRepository()
const createTaskUseCase = new CreateTaskUseCase(userRepository)
const createTaskController = new CreateTaskController(createTaskUseCase)

export { createTaskController }