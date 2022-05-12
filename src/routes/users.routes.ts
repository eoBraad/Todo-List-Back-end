import { Router } from 'express'
import { createUserController } from '../modules/users/useCases/createUserUseCase'

const userRoutes = Router()

userRoutes.post('/', (req, res) => {
  createUserController.handle(req, res)
})



export { userRoutes }