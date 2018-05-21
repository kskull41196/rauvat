import { CrudController } from './crudController'
import { AuthController } from './authController'

import {
    UserCrudController
} from './crud/userCrudController'



const authController = new AuthController()

// Crud

const userController = new UserCrudController()



export {
    CrudController,
    authController,
    userController
}