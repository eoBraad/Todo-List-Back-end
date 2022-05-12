import { Router } from 'express'
import { authMiddleware } from '../middlewares/authenticateMiddleware'
import { authenticateUserController } from '../modules/users/useCases/authenticateUserUseCase'

const authenticateRoutes = Router()

authenticateRoutes.post('/', (req, res) => {
  authenticateUserController.handle(req, res)
})

authenticateRoutes.post('/token', authMiddleware, (req, res) => {
  const {user} = req.body
  return res.status(200).json({user})
})

export { authenticateRoutes }