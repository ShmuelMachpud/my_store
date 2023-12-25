
import express from 'express'

// import  chalk from 'chalk';

import cors from 'cors'

import {connectDB} from './configs/db'
import {connectRedis} from './configs/connectRedis'
import inventoryRouter from './routes/inventoryRouts'

import redisRouts from './routes/redisRouts'


export const app = express()
const port =  5000

app.use(cors())

app.use('/inventory', inventoryRouter)


app.use('/redis', redisRouts )


const start = async () => {
    const db = await connectDB();
    console.log(('Connecting to database successfully'));


    const redisClient = await connectRedis()
    console.log("connected successfully to Redis client!!! ");
    

    app.listen(port, () => {
      console.log(`server is running at port ${port}`);

      // console.log(chalk.blue('Hello world!'));
    });
  }
  start()

  // client.connect()
  // .then(() =>  console.log("connected successfully to Redis client!!! "))
  // .catch((error) => {  if (error instanceof Error) console.log(error.message) })