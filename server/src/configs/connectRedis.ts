import {createClient} from 'redis'


export const client = createClient({
    password: '2rZzc1EJhrp48kyJCeHto0Dg7XJdqrzb',
    socket: {
        host: 'redis-10274.c274.us-east-1-3.ec2.cloud.redislabs.com',
        port: 10274
    }
});

export const connectRedis = () =>{
    const clientRedis = client.connect()
    
    if (!clientRedis){
        throw new Error(
            'Could not connect to redis'
        )
    } else {
        return clientRedis
    }
}