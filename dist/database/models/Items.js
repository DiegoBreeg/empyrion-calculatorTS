"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.Items = void 0;
const mongoose_1 = require("mongoose");
const InputSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
}, { _id: false });
const ItemsSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    output: { type: Number, required: true },
    placeable: [String],
    category: String,
    input: { type: [InputSchema], required: true },
});
const Items = (0, mongoose_1.model)('Item', ItemsSchema);
exports.Items = Items;
const Input = (0, mongoose_1.model)('Input', InputSchema);
exports.Input = Input;
//# sourceMappingURL=Items.js.map