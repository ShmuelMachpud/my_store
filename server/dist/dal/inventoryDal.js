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
exports.getProductByIdDal = exports.getAllProductsDal = void 0;
const queryDB_1 = require("../utils/queryDB");
const getAllProductsDal = () => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield (0, queryDB_1.query)(selectAll);
    return rows;
});
exports.getAllProductsDal = getAllProductsDal;
const getProductByIdDal = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield (0, queryDB_1.query)(`select * from products where id = '${_id}'`);
    return rows[0];
});
exports.getProductByIdDal = getProductByIdDal;
const selectAll = `SELECT 
p.id, 
p.name, 
p.price AS saleprice,
p.quantity, 
p.description, 
c.name AS category,
p.discount,
p.rating, 
p.clicked AS clicked,
json_build_object('url', i.url, 'alt', i.alt) AS image, 


p.isForSale,
p.costPrice,
p.supplier
FROM products p JOIN categories c 
    ON p.category = c.id 
JOIN images i 
    ON p.image = i.id 


    GROUP BY p.id, c.name, i.url, i.alt;`;
