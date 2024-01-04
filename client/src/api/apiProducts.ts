
import {Product} from '../types/typeProducts'

import handle from './handleApiRes'

// Server Local
// const uriServerLocal = import.meta.env.VITE_API_URI

// Server Render
const uriServerRender = import.meta.env.VITE_API_URI_RENDER

export async function getAllProducts():Promise<Product[]> {
    const response = await fetch(`${uriServerRender}/inventory/`) // uriServerLocal or uriServerRender

    return await handle(response)
}
