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
exports.ItemsController = void 0;
const SaveItemService_1 = require("../services/SaveItemService");
const FindItemService_1 = require("../services/FindItemService");
const UpdateItemService_1 = require("../services/UpdateItemService");
const CalculateItemService_1 = require("../services/CalculateItemService");
class ItemsController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const saveItemService = new SaveItemService_1.SaveItemService();
            const response = yield saveItemService.execute(body);
            return res.status(201).json(response);
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            const findItemService = new FindItemService_1.FindItemService();
            const response = yield findItemService.execute(params);
            return res.status(200).json(response);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, params } = req;
            const updateItemService = new UpdateItemService_1.UpdateItemService();
            const response = yield updateItemService.execute(body, params);
            return res.status(201).json(response);
        });
    }
    calculate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query } = req;
            const calculateItemService = new CalculateItemService_1.CalculateItemService();
            const response = yield calculateItemService.execute(query);
            return res.status(201).json(response);
        });
    }
}
exports.ItemsController = ItemsController;
//# sourceMappingURL=ItemsController.js.map