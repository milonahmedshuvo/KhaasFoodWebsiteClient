import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ProductSingle from './ProductSingle'

const AllProducts = () => {
      
      const {data:products=[]} =useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/allProducts")
            const data = await res.json()
            return data
        }
      })



      
  return (
    
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 my-28'>

    {
       products.map( ( product) => <ProductSingle
                key={product._id}
                product={product}
                            ></ProductSingle> )
    }

   </div>
  )
}

export default AllProducts
