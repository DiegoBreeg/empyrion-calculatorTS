import { IInput, IItems, Items } from '../database/models/Items'


class SaveItemService {

    async execute(body: any): Promise<Array<any>> {
        const input: Array<IInput> = []

        body.input.forEach((ell: IInput) => input.push(ell))
        const item = new Items<IItems>({
            name: body.name,
            output: body.output,
            placeable: body.placeable,
            category: body.category,
            input
        })
        try {
            const data = await Items.find({ name: body.name })
            if (data.length != 0)
                return [{ message: 'Este item já foi salvo' }]
            await item.save()
            return [item]
        } catch (err) {
            return [{ message: "Houve algum erro inesperado" }, err]
        }
    }
}





export { SaveItemService }