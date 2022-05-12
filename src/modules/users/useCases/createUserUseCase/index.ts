import { UserRepository } from "../../Repositories/implementations/usersRepositories";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase, } from "./createUserUseCase";


const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }