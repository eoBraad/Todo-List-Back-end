import { UserRepository } from "../../Repositories/implementations/usersRepositories";
import { AuthenticateUserController } from "./authenticateUserController";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

const userRepository = new UserRepository()
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository)
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)

export { authenticateUserController }