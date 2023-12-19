import express from 'express'

import {connectDB} from './configs/db'
import inventoryRouter from './routes/inventoryRouts'


export const app = express()
const port =  5000

app.use('/inventory', inventoryRouter)




const start = async () => {
    const db = await connectDB();
    console.log('Connecting to database successfully');

    app.listen(port, () => {
      console.log(`server is running at port ${port}`);
    });
  }
  start()