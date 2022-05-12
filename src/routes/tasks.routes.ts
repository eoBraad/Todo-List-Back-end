import { Router } from 'express'
import { authMiddleware } from '../middlewares/authenticateMiddleware'
import { completeTaskController } from '../modules/users/useCases/completeTaskUseCase'
import { createTaskController } from '../modules/users/useCases/createTaskUseCase'
import { deleteTaskController } from '../modules/users/useCases/deleteTaskUseCase'


const taskRoutes = Router()

taskRoutes.post('/create', authMiddleware,(req, res) => {
  createTaskController.handle(req, res)
})

taskRoutes.patch('/complete', authMiddleware, (req, res) => {
  completeTaskController.handle(req, res)
})

taskRoutes.patch('/delete', authMiddleware, (req, res) => {
  deleteTaskController.handle(req, res)
})

export { taskRoutes }