"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = exports.client = void 0;
const redis_1 = require("redis");
exports.client = (0, redis_1.createClient)({
    password: '2rZzc1EJhrp48kyJCeHto0Dg7XJdqrzb',
    socket: {
        host: 'redis-10274.c274.us-east-1-3.ec2.cloud.redislabs.com',
        port: 10274
    }
});
const connectRedis = () => {
    const clientRedis = exports.client.connect();
    if (!clientRedis) {
        throw new Error('Could not connect to redis');
    }
    else {
        return clientRedis;
    }
};
exports.connectRedis = connectRedis;
