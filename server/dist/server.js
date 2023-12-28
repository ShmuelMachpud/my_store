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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
// import  chalk from 'chalk';
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./configs/db");
const connectRedis_1 = require("./configs/connectRedis");
const inventoryRouts_1 = __importDefault(require("./routes/inventoryRouts"));
const redisRouts_1 = __importDefault(require("./routes/redisRouts"));
exports.app = (0, express_1.default)();
const port = 5000;
exports.app.use((0, cors_1.default)());
exports.app.use('/inventory', inventoryRouts_1.default);
exports.app.use('/redis', redisRouts_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, db_1.connectDB)();
    console.log(('Connecting to database successfully'));
    const redisClient = yield (0, connectRedis_1.connectRedis)();
    console.log("connected successfully to Redis client!!! ");
    exports.app.listen(port, () => {
        console.log(`server is running at port ${port}`);
        // console.log(chalk.blue('Hello world!'));
    });
});
start();
// client.connect()
// .then(() =>  console.log("connected successfully to Redis client!!! "))
// .catch((error) => {  if (error instanceof Error) console.log(error.message) })
