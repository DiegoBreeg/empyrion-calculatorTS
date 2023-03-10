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
exports.UpdateItemService = void 0;
const Items_1 = require("../database/models/Items");
class UpdateItemService {
    execute(body, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.name)
                return [{ message: 'Informe nome de um item!' }];
            params.name = params.name.replace('-', ' ');
            const filter = params.name;
            const update = body;
            const response = yield Items_1.Items.findOneAndUpdate(filter, update);
            return [{ message: 'Item Alterado com sucesso!' }, response];
        });
    }
}
exports.UpdateItemService = UpdateItemService;
//# sourceMappingURL=UpdateItemService.js.map