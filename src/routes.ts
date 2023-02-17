import { Router, /* RequestHandler */ } from "express";
import { ItemsController } from './controllers/ItemsController'
import { SaveItemValidation } from './validations/SaveItemValidation'


const itemController = new ItemsController()
const saveItemValidation = new SaveItemValidation()

const router = Router()

//crud
router.post('/items', saveItemValidation.validate, itemController.save)
router.get('/items/:name', itemController.find)

export  { router }