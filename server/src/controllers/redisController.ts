import asyncHandler from 'express-async-handler';
import {client} from '../configs/connectRedis'

export const redisController = asyncHandler( async (req, res) => {
    const {name} = req.query;
    if (name) await client.set('name', String(name))
    const data = await client.get('name')
    res.send(data)
    })