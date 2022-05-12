import { AppError } from './../../../../error/AppError';
import { compare } from 'bcrypt';
import { UserRepository } from '../../Repositories/implementations/usersRepositories';
import { IAuthenticateDTO } from './../../DTOS/IAuthenticateDTO';
import { sign } from 'jsonwebtoken'

class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute({email, password}: IAuthenticateDTO) {
    const user = await this.userRepository.findUserByEmail(email)

    if(!user) {
      throw new AppError('Email or password incorrect!', 401)
    }

    const passwordMatch = await compare(password, user.password)

    
    if(!passwordMatch) {
      throw new AppError('Email or password incorrect!', 401)
    }

    const tasks = await this.userRepository.userTasks(user.user_id)

    const token = sign({
      user: {
        name: user.name,
        last_name: user.last_name,
        email: user.email
      },
      tasks
    }, process.env.SECRET_JWT, {
      subject: user.user_id,
      expiresIn: "1d"
    })

    return {
      user: {
        name: user.name,
        last_name: user.last_name,
        tasks
      },
      token
    }
  }
}

export { AuthenticateUserUseCase }