"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redisController_1 = require("../controllers/redisController");
const redisRouts = express_1.default.Router();
redisRouts.get('/', redisController_1.redisController);
exports.default = redisRouts;
