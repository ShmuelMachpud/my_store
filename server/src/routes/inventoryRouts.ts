import express from 'express'
import {getAllProductsController} from '../controllers/inventoryController'


const inventoryRouter = express.Router() 

inventoryRouter.get('/', getAllProductsController)
inventoryRouter.get('/:id', getAllProductsController)


export default inventoryRouter