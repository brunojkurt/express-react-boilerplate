import express from 'express'

// middlewares
import AuthMiddleware from './middlewares/AuthMiddleware'

// controllers
import AuthController from './controllers/AuthController'
import UserController from './controllers/UserController'

// request.body
// request.param
// query.param

const routes = express.Router()

const authController = new AuthController()
const userController = new UserController()

routes.get('/', (_, response) => response.send('Greetings API'))

// AuthRoutes
routes.post('/register', authController.register)
routes.post('/login', authController.login)

// UserRoutes
routes.get('/users', AuthMiddleware, userController.index)

export default routes