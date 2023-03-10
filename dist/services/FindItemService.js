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
exports.FindItemService = void 0;
const Items_1 = require("../database/models/Items");
class FindItemService {
    execute(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.name)
                return yield Items_1.Items.find({});
            params.name = params.name.replace('-', ' ');
            return yield Items_1.Items.find(params || {});
        });
    }
}
exports.FindItemService = FindItemService;
//# sourceMappingURL=FindItemService.js.map