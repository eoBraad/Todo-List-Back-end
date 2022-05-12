import { CompleteTaskController } from './completeTaskController';
import { CompleteTaskUseCase } from './completeTaskUseCase';
import { UserRepository } from "../../Repositories/implementations/usersRepositories";

const userRepository = new UserRepository()
const completeTaskUseCase = new CompleteTaskUseCase(userRepository)
const completeTaskController = new CompleteTaskController(completeTaskUseCase)

export { completeTaskController }