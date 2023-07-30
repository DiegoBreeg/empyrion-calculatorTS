"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateItemService = void 0;
const Items_1 = require("../database/models/Items");
class CalculateItemService {
    constructor() {
        this.rawResource = [];
        this.list = {};
        this.rawResourceSum = {};
        this.response = [];
    }
    execute(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = query.name.split('-').join(' ');
            const amount = query.amount;
            this.list[name] = { name, amount };
            const haveItem = yield Items_1.Items.findOne({ name });
            console.log(typeof haveItem);
            if (!haveItem)
                return [{ message: 'item not found' }];
            while (Object.keys(this.list).length) {
                for (const property in this.list) {
                    yield this.itemCalculator(this.list[property]);
                }
            }
            yield this.rawResource.forEach((element) => __awaiter(this, void 0, void 0, function* () {
                if (this.rawResourceSum[element.name]) {
                    this.rawResourceSum[element.name] += element.yields;
                    return;
                }
                this.rawResourceSum[element.name] = element.yields;
            }));
            for (const item in this.rawResourceSum) {
                this.response.push({ "name": item, "yields": this.rawResourceSum[item] });
            }
            return this.response;
        });
    }
    itemCalculator({ name, amount }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { output } = yield Items_1.Items.findOne({ name }).select("output");
            const { input } = yield Items_1.Items.findOne({ name }).select("input");
            const yields = Math.ceil(amount / output);
            delete this.list[name];
            if (input.length == 0) {
                this.rawResource.push({ name, yields });
                return;
            }
            yield input.forEach(({ name, amount }) => __awaiter(this, void 0, void 0, function* () {
                if (Object.keys(this.list).includes(name)) {
                    this.list[name] = { name, amount: Math.ceil(yields * amount) + this.list[name].amount };
                    return;
                }
                this.list[name] = { name, amount: Math.ceil(yields * amount) };
            }));
        });
    }
}
exports.CalculateItemService = CalculateItemService;
//# sourceMappingURL=CalculateItemService.js.map