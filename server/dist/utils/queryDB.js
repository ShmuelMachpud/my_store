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
exports.query = void 0;
const db_1 = require("../configs/db");
const query = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, db_1.connectDB)();
        const res = client.query(query);
        client.release();
        return (res);
    }
    catch (_a) {
        console.error();
        throw new Error('error');
    }
});
exports.query = query;
