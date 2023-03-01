import { Request, Response } from 'express';
import { SaveItemService } from '../services/SaveItemService'
import { FindItemService } from '../services/FindItemService'
import { UpdateItemService } from '../services/UpdateItemService'
import { CalculateItemService } from '../services/CalculateItemService'

class ItemsController {
    async save(req: Request, res: Response): Promise<Response> {
        const { body } = req
        const saveItemService = new SaveItemService()
        const response = await saveItemService.execute(body)
        return res.status(201).json(response)
    }

    async find(req: Request, res: Response): Promise<Response> {
        const { params } = req
        const findItemService = new FindItemService()
        const response = await findItemService.execute(params)
        return res.status(200).json(response)
    }

    async update(req: Request, res: Response): Promise<Response> {
        const { body, params } = req
        const updateItemService = new UpdateItemService()
        const response = await updateItemService.execute(body, params)

        return res.status(201).json(response)
    }

    async calculate(req: Request, res: Response): Promise<Response> {
        const { query } = req
        const calculateItemService = new CalculateItemService()
        const response = await calculateItemService.execute(query)

        return res.status(201).json(response)
    }
}

export { ItemsController }