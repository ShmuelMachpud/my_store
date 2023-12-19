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
exports.getProductByIdService = exports.getAllProductsService = void 0;
const inventoryDal_1 = require("../dal/inventoryDal");
const getAllProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = yield (0, inventoryDal_1.getAllProductsDal)();
    if (!allProducts) {
        throw new Error('failed to get products');
    }
    else {
        console.log(allProducts);
        return allProducts;
    }
});
exports.getAllProductsService = getAllProductsService;
const getProductByIdService = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield (0, inventoryDal_1.getProductByIdDal)(_id);
    return product;
});
exports.getProductByIdService = getProductByIdService;
