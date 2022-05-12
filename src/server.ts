import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { AppError } from './error/AppError'
import { routes } from './routes'

const app = express()

app.use(express.json())

app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    console.log(err)
    return res.status(err.statusCode).json({message: err.message})
  }

  return res.status(500).json({
    status: "error",
    message: `Internal Server error - ${err.message}` 
  })
})

app.listen(3333, () => {
  console.log('server inicialized')
})