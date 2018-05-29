import { AuthInfoMiddleware } from './authMiddleware'
import { AdminAuthInfoMiddleware } from './adminAuthMiddleware'
import { BlockMiddleware } from './blockMiddleware'
import { QueryMiddleware } from './queryMiddleware' 
import { FirebaseAuthInfoMiddleware } from './firebaseAuthMiddleware'

const authInfoMiddleware = new AuthInfoMiddleware()
const adminAuthInfoMiddleware = new AdminAuthInfoMiddleware()
const blockMiddleware = new BlockMiddleware()
const queryMiddleware = new QueryMiddleware()
const firebaseAuthMiddleware = new FirebaseAuthInfoMiddleware()

export { 
    authInfoMiddleware,
    blockMiddleware,
    queryMiddleware,
    firebaseAuthMiddleware,
    adminAuthInfoMiddleware
}