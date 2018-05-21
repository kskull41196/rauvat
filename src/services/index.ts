import { ErrorService } from './errorService'
import { TokenService } from './tokenService'
import { UtilService } from './utilService'
import { FirebaseService } from './firebaseService'
import {
    UserService
} from './crud/userService'
import {
    PostService
} from './crud/PostService'

// Crud
import { ICrudExecOption, ICrudOption, CrudService } from './crudService'
// import { SampleCrudService } from './crud/sampleCrudService.mongo'


const errorService = new ErrorService()
const tokenService = new TokenService()
const utilService = new UtilService()
const firebaseService = new FirebaseService()
const userService = new UserService()
const postService = new PostService()

// Crud

export {
    errorService,
    tokenService,
    utilService,
    firebaseService,
    CrudService,
    ICrudExecOption,
    ICrudOption,
    userService,
    postService,
}