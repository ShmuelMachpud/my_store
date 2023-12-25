
import {Product} from '../types/typeProducts'

import handle from './handleApiRes'

const uri = import.meta.env.VITE_API_URI
export async function getAllProducts():Promise<Product[]> {
    const response = await fetch(`${uri}/inventory/`)

    return await handle(response)
}

