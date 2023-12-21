import express from 'express'
import {getAllProductsController, getProductByIdController} from '../controllers/inventoryController'


const inventoryRouter = express.Router() 

inventoryRouter.get('/', getAllProductsController)
inventoryRouter.get('/:id', getProductByIdController)


export default inventoryRouter