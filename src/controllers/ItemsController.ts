import { Request, Response } from 'express';
import { SaveItemService } from '../services/SaveItemService'
import { FindItemService } from '../services/FindItemService'


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
        console.log(req)

        return res.status(201).json({ message: 'Item salvo com sucesso!' })
    }
}

export { ItemsController }