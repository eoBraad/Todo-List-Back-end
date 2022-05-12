import { IcreateTaskDTO } from './../../DTOS/ICreateTaskDTO';
import { ICreateUserDTO } from '../../DTOS/ICreateUserDTO';
import { IUsers } from '../IUsers';
import { PrismaClient, Tasks, User } from '@prisma/client'
import { hash } from 'bcrypt'
import { AppError } from '../../../../error/AppError';

class UserRepository implements IUsers {
  private repository = new PrismaClient()

  async createUser({name, email, password, last_name}: ICreateUserDTO): Promise<any> {
    const passwordHash = await hash(password, 8)

    const user = await this.repository.user.create({
      data: {
        email,
        name,
        password: passwordHash,
        last_name
      }
    });

    return user
  };

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.repository.user.findUnique({
      where: {
        email,
      }
    })

    return user
  }

  async userTasks(id: string): Promise<Tasks[]> {
    const tasks = await this.repository.tasks.findMany({
      where: {
        user_id: id
      }
    })

    return tasks
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.repository.user.findUnique({
      where: {
        user_id: id
      }
    })

    return user
  }

  async createTask({task_description, id, task_name}: IcreateTaskDTO): Promise<any> {
    const task = await this.repository.tasks.create({
      data: {
        user_id: id,
        task_description,
        task_name,
      }
    })
    return task
  }

  async completeTask(task_id: string): Promise<Tasks> {
    const task = await this.repository.tasks.findUnique({
      where: {
        id_task: task_id,
      }
    })

    if(!task) {
      throw new AppError('Task not exists', 404)
    }
   
    const completedTask = await this.repository.tasks.update({
      where:{
        id_task: task_id
      },
      data: {
        completed: !task.completed
      }
    })

    return completedTask
  }

  async deleteTask(task_id: string): Promise<Tasks> {
    try {
      const tasks = await this.repository.tasks.delete({
        where: {
          id_task: task_id,
        },
      })

      return tasks
    } catch (err) {
      return null
    }
  }
}

export { UserRepository }