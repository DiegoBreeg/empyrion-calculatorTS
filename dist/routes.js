"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ItemsController_1 = require("./controllers/ItemsController");
const itemController = new ItemsController_1.ItemsController();
const router = (0, express_1.Router)();
exports.router = router;
router.post('/items', itemController.save);
router.get('/items/:name', itemController.find);
router.get('/items/', itemController.find);
router.put('/items/:name', itemController.update);
router.get('/calculate', itemController.calculate);
//# sourceMappingURL=routes.js.map