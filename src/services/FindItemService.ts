import { Items } from '../database/models/Items'


class FindItemService {

    async execute(params: any): Promise<Array<any>> {
        if (!params.name)
            return await Items.find({}) 

        params.name = params.name.replace('-', ' ')
        return await Items.find(params || {})
    }
}

export { FindItemService }