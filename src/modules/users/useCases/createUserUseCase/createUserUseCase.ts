import { UserRepository } from '../../Repositories/implementations/usersRepositories';
import { ICreateUserDTO } from '../../DTOS/ICreateUserDTO';
import { User } from '@prisma/client';
import { AppError } from '../../../../error/AppError';

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {
  }

  async execute({email, name, password, last_name}: ICreateUserDTO): Promise<User | false>{
    const userAlreadExists = await this.userRepository.findUserByEmail(email)

    
    if (userAlreadExists) {
      throw new AppError('User already exists', 401)

    }

    const user = await this.userRepository.createUser({name, email, password, last_name})
    return user
  }
}

export { CreateUserUseCase }