import express from 'express'
import {redisController} from '../controllers/redisController'

 const redisRouts = express.Router()

redisRouts.get('/', redisController)

export default redisRouts
