
import { Items } from '../database/models/Items'


class UpdateItemService {

    async execute(body: any, params: any): Promise<Array<any>> {

        if (!params.name)
            return [{ message: 'Informe nome de um item!' }]
        params.name = params.name.replace('-', ' ')
        const filter = params.name
        const update = body

        const response = await Items.findOneAndUpdate(filter, update)


        return [{ message: 'Item Alterado com sucesso!' }, response]
    }

}





export { UpdateItemService }