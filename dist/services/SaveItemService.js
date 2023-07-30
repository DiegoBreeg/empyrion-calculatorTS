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
exports.SaveItemService = void 0;
const Items_1 = require("../database/models/Items");
class SaveItemService {
    execute(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = [];
            body.input.forEach((ell) => input.push(ell));
            const item = new Items_1.Items({
                name: body.name,
                output: body.output,
                types: body.types,
                input
            });
            try {
                const data = yield Items_1.Items.find({ name: body.name });
                if (data.length != 0)
                    return [{ message: 'Este item já foi salvo' }];
                yield item.save();
                return [item];
            }
            catch (err) {
                return [{ message: "Houve algum erro inesperado" }, err];
            }
        });
    }
}
exports.SaveItemService = SaveItemService;
//# sourceMappingURL=SaveItemService.js.map