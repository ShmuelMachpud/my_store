import {useState, useEffect} from 'react'
import {getAllProducts} from '../api/apiProducts'
import {Product} from '../types/typeProducts'



export default function Test() {

  const [allProducts, setAllProducts] = useState<Product[]>([])
  useEffect(()=> {

  async function getData() {
    const data = await getAllProducts()
    
    setAllProducts(data)
  }
  getData()
},[])

      
    
  return (
    <div>
      {allProducts.map((product)=> (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image.url} alt={product.image.alt} />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}
