"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ItemsController_1 = require("./controllers/ItemsController");
const SaveItemValidation_1 = require("./validations/SaveItemValidation");
const itemController = new ItemsController_1.ItemsController();
const saveItemValidation = new SaveItemValidation_1.SaveItemValidation();
const router = (0, express_1.Router)();
exports.router = router;
router.post('/items', saveItemValidation.validate, itemController.save);
router.get('/items/:name', itemController.find);
router.get('/items/', itemController.find);
router.put('/items/:name', itemController.update);
router.get('/calculate', itemController.calculate);
//# sourceMappingURL=routes.js.map