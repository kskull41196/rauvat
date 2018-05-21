import { CrudController } from './crudController'
import { AuthController } from './authController'

import {
    UserCrudController
} from './crud/userCrudController'
import {
    PostCrudController
} from './crud/postCrudController'



const authController = new AuthController()

// Crud

const userController = new UserCrudController()
const postController = new PostCrudController()



export {
    CrudController,
    authController,
    userController,
    postController
}