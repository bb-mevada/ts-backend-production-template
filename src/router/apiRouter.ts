import { Router } from 'express'
import apiController from '../controller/apiController'

const router = Router()

router.route('/self').get(apiController.self)
router.route('/health').get(apiController.health)

export default router
