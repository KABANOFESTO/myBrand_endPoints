import {Router} from 'express'
import {createNewUser,LoginUser,getUserInfo} from '../controllers/userController'
const router = Router()
router.post('/login',LoginUser)
router.post('/signUp',createNewUser)

export default router
