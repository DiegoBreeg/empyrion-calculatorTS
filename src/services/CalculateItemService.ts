import { Items } from '../database/models/Items'
class CalculateItemService {
    name: string = ''
    amount: number = 0
    rawResource: Array<any> = []
    list: Array<any> = []

    constructor(query: any) {
        this.name = query.name = query.name.replace('-', ' ')
        this.amount = query.amount
        this.list.push({"name": query.name, "amount": this.amount})
    }

    async execute(): Promise<Array<any>> {

        async function itemCalculator(name: string,/*  amount: number */ ): Promise<void> {
            const  output  = await Items.findOne({ "name": name }).select("output")
            console.log(output)



            //return listenerCount.push({ name, amount: Math.ceil(yields * amount) })
        }

        itemCalculator(this.name)



        return []
    }
}


export { CalculateItemService }