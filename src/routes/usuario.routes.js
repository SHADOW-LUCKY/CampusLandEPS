import {Router} from 'express'
import {listUserABC} from '../controllers/usuario.controllers.js'

const router = Router()

router.get('/userABC', listUserABC)

export default router