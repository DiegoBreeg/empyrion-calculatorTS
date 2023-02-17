import { Items } from '../database/models/Items'


class FindItemService {

    async execute(params: any): Promise<Array<any>> {
        const filter = params.name.replace('-', ' ') 
        return await Items.find({name: filter})
    }
}

export { FindItemService }