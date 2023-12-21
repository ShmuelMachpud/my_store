import {Pool, PoolClient} from 'pg'

const pool = new Pool ({
    user: 'postgres',
    password: '206830895',
    host: '127.0.0.1' ,
    database: 'my-store',
    port: 5432
})

export const connectDB = () =>{

    const client = pool.connect() 

    if (!client) {
        throw new Error(
            'Could not connect to DB'
        )
    } else {
        
        return client
    }
}