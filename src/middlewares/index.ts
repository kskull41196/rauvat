import { AuthInfoMiddleware } from './authMiddleware'
import { AdminAuthInfoMiddleware } from './adminAuthMiddleware'
import { BlockMiddleware } from './blockMiddleware'
import { QueryMiddleware } from './queryMiddleware'
import { FirebaseAuthInfoMiddleware } from './firebaseAuthMiddleware'
import { UserRoleMiddleware } from './userRoleMiddleware'
import { PageInfoMiddleware } from './pageInfoMiddleware'

const authInfoMiddleware = new AuthInfoMiddleware()
const adminAuthInfoMiddleware = new AdminAuthInfoMiddleware()
const blockMiddleware = new BlockMiddleware()
const queryMiddleware = new QueryMiddleware()
const firebaseAuthMiddleware = new FirebaseAuthInfoMiddleware()
const userRoleMiddleware = new UserRoleMiddleware()
const pageInfoMiddleware = new PageInfoMiddleware()

export {
    authInfoMiddleware,
    blockMiddleware,
    queryMiddleware,
    firebaseAuthMiddleware,
    adminAuthInfoMiddleware,
    userRoleMiddleware,
    pageInfoMiddleware
}