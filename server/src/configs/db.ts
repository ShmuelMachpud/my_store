import {Pool, PoolClient, Client} from 'pg'
import { client } from './connectRedis'


const pool = new Pool ({
    user: 'postgres',
    password: '206830895',
    host: '127.0.0.1' ,
    database: 'my-store',
    port: 5432
})

const clientElephant = new Pool ({
    connectionString: 'postgres://spwacbqy:3db9oECWKeNAfOqoIFGoYujkHzwL7-zB@mel.db.elephantsql.com/spwacbqy'
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