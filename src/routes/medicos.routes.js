import {Router} from 'express'
import {allmedics, especificmedic} from '../controllers/medicos.controllers.js'

const router = Router()

router.get('/all', allmedics)
router.get('/especific', especificmedic)

export default router