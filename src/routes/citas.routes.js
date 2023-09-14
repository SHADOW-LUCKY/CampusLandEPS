import {Router} from 'express'
import {especificday, nextcita} from '../controllers/citas.controllers.js'

const router = Router()

router.get('/especificday', especificday)
router.get('/nextcita', nextcita)

export default router