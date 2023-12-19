
import {getAllProductsDal, getProductByIdDal} from '../dal/inventoryDal'

export const getAllProductsService = async() =>{
    const allProducts = await getAllProductsDal()

    if (!allProducts) {
        throw new Error (
            'failed to get products',
          );
    } else {
        console.log(allProducts);
        
        return allProducts
    }
}

export const getProductByIdService = async(_id: string) => {
    const product = await getProductByIdDal(_id)

    return product
}