import {getAllProductsService, getProductByIdService} from '../services/inventoryService'
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import {AdminProduct} from '../types/product'

export const getAllProductsController = asyncHandler( async (req:Request, res:Response) =>{
    const allProducts : AdminProduct[] = await getAllProductsService();

    console.log(allProducts);
    
    res.json(allProducts)
})

export const getProductByIdController = asyncHandler( async (req:Request, res:Response) => {
    const product : AdminProduct = await  getProductByIdService(req.params.id)

    res.json(product)
})

