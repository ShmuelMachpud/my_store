import {connectDB} from '../configs/db'
import {PoolClient} from 'pg'

export const query = async (query: string)=> {
    try{
        const client:PoolClient = await connectDB()
        const res = client.query(query)
        client.release()
        return(res)
    } catch {
        console.error()
        throw new Error (
            'error'
        )
        
    }

}