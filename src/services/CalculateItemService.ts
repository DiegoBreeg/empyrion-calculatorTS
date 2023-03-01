import { Items } from '../database/models/Items'
import { IInput } from "../database/models/Items"

type TRawResource = { name: string, yields: number }
type TItem = { [key: string]: { name: string, amount: number } }

class CalculateItemService {
    public rawResource: Array<TRawResource> = []
    public list: TItem = {}
    public rawResourceSum: any = {}
    public response: Array<object> = []

    async execute(query: any): Promise<Array<any>> {
        const name = query.name.replace('-', ' ')
        const amount = query.amount
        this.list[name] = { name, amount }

        while (Object.keys(this.list).length) {
            for (const property in this.list) {
                await this.itemCalculator(this.list[property])
            }
        }

        await this.rawResource.forEach(async element => {
            if (this.rawResourceSum[element.name]) {
                this.rawResourceSum[element.name] += element.yields
                return
            }
            this.rawResourceSum[element.name] = element.yields
        })

        for (const item in this.rawResourceSum) {
            this.response.push({ "name": item, "yields": this.rawResourceSum[item] })
        }

        return this.response
    }

    async itemCalculator({ name, amount }: IInput) {
        const { output }: any = await Items.findOne({ name }).select("output")
        const { input }: any = await Items.findOne({ name }).select("input")
        const yields = Math.ceil(amount / output)
        delete this.list[name]

        if (input.length == 0) {
            this.rawResource.push({ name, yields })
            return
        }

        await input.forEach(async ({ name, amount }: any) => {
            if (Object.keys(this.list).includes(name)) {
                this.list[name] = { name, amount: Math.ceil(yields * amount) + this.list[name].amount }
                return
            }
            this.list[name] = { name, amount: Math.ceil(yields * amount) }
        })
    }
}


export { CalculateItemService }