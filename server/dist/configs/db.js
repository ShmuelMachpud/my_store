"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    password: '206830895',
    host: '127.0.0.1',
    database: 'my-store',
    port: 5432
});
const connectDB = () => {
    const client = pool.connect();
    if (!client) {
        throw new Error('Could not connect to DB');
    }
    else {
        return client;
    }
};
exports.connectDB = connectDB;
