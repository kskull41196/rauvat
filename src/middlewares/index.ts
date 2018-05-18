import { AuthInfoMiddleware } from './authMiddleware'
import { BlockMiddleware } from './blockMiddleware'
import { QueryMiddleware } from './queryMiddleware' 
import { FirebaseAuthInfoMiddleware } from './firebaseAuthMiddleware'

const authInfoMiddleware = new AuthInfoMiddleware()
const blockMiddleware = new BlockMiddleware()
const queryMiddleware = new QueryMiddleware()
const firebaseAuthMiddleware = new FirebaseAuthInfoMiddleware()

export { 
    authInfoMiddleware,
    blockMiddleware,
    queryMiddleware,
    firebaseAuthMiddleware,
}