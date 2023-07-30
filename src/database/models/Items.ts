import { Schema, model } from 'mongoose';

interface IInput { name: string, amount: number }

interface IItems {
    name: string,
    output: number,
    placeable: String[],
    category: string,
    input: Array<IInput>
}

const InputSchema = new Schema<IInput>({
    name: { type: String, required: true },
    amount: { type: Number, required: true },

}, { _id: false })

const ItemsSchema = new Schema<IItems>({
    name: { type: String, required: true, unique: true },
    output: { type: Number, required: true },
    placeable: [String],
    category: { type: String},
    input: { type: [InputSchema], required: true },
})

const Items = model<IItems>('Item', ItemsSchema)
const Input = model<IInput>('Input', InputSchema)

export { Items, IItems, IInput, Input }