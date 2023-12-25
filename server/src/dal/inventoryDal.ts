import {query} from '../utils/queryDB'
import {AdminProduct} from '../types/product'

export const getAllProductsDal = async () =>{
    const {rows} : {rows: AdminProduct[]} = await query(selectAll)
    
    return rows
}

export const getProductByIdDal = async (_id: string) =>{

    const {rows} : {rows:AdminProduct[]} = await query(`select * from products where id = '${_id}'`)

    return rows[0]
}



const selectAll = `SELECT 
p.id, 
p.name, 
p.price AS saleprice,
p.quantity, 
p.description, 
c.name AS category,
p.discount,
p.rating, 
p.clicked AS clicked,
json_build_object('url', i.url, 'alt', i.alt) AS image, 


p.isForSale,
p.costPrice,
p.supplier
FROM products p JOIN categories c 
    ON p.category = c.id 
JOIN images i 
    ON p.image = i.id 


    GROUP BY p.id, c.name, i.url, i.alt;`