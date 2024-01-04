import {Pool, PoolClient, Client} from 'pg'
import { client } from './connectRedis'
import 'dotenv/config'


const pool = new Pool ({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST ,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
})

const uriDbRender = process.env.URI_DB_RENDER


const clientElephant = new Pool ({
    connectionString: uriDbRender
})


export const connectDB = ()=>{

    // const client = pool.connect() 
    const client = clientElephant.connect()

    if (!client) {
        throw new Error(
            'Could not connect to DB'
        )
    } else {
        
        return client
    }
}