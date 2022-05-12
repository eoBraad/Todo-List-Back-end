import { Tasks, User } from '@prisma/client';
import { IcreateTaskDTO } from '../DTOS/ICreateTaskDTO';
import { ICreateUserDTO } from '../DTOS/ICreateUserDTO';

export interface IUsers {
  createUser({email, name, password}: ICreateUserDTO): Promise<User>
  findUserByEmail(email: string): Promise<User>
  userTasks(id: string): Promise<Tasks[]>
  createTask({task_description, task_name, id}: IcreateTaskDTO): Promise<any>
  findUserById(id: string): Promise<User>
  completeTask(task_id: string): Promise<Tasks>
  deleteTask(task_id: string): Promise<Tasks>
}