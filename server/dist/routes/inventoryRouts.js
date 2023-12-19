"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inventoryController_1 = require("../controllers/inventoryController");
const inventoryRouter = express_1.default.Router();
inventoryRouter.get('/', inventoryController_1.getAllProductsController);
inventoryRouter.get('/:id', inventoryController_1.getAllProductsController);
exports.default = inventoryRouter;
