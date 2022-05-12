import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { taskRoutes } from './tasks.routes'
import { userRoutes } from './users.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/auth', authenticateRoutes)
routes.use('/task', taskRoutes)

export { routes }