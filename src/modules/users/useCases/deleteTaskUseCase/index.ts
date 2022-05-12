import { DeleteTaskController } from './deleteTaskController';
import { DeleteTaskUseCase } from './deleteTaskUseCase';
import { UserRepository } from "../../Repositories/implementations/usersRepositories";

const userRepository = new UserRepository()
const deleteTaskUseCase = new DeleteTaskUseCase(userRepository)
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase)

export { deleteTaskController }