import { Router, /* RequestHandler */ } from "express";
import { ItemsController } from './controllers/ItemsController'
import { SaveItemValidation } from './validations/SaveItemValidation'


const itemController = new ItemsController()
const saveItemValidation = new SaveItemValidation()

const router = Router()

//crud
router.post('/items', saveItemValidation.validate, itemController.save)
router.get('/items/:name', itemController.find)
router.get('/items/', itemController.find)
router.put('/items/:name', itemController.update)
router.get('/calculate', itemController.calculate)

export  { router }