import React from 'react'
import { useQuery } from '@tanstack/react-query'
import FruitSingle from './FruitSingle'


const FruitsMain = () => {


  const {data:fruits=[]}=useQuery({
    queryKey: ['fruits'],
    queryFn: async () => {
        const res =await fetch('http://localhost:5000/FruitsAll')
        const result= await res.json()
        return result
    }
})


console.log(fruits)
  return (
    <div>
        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 my-28'>

       {
            fruits.map( ( food) => <FruitSingle
                   key={food._id}
                   food={food}
                                   ></FruitSingle> )
           }

       </div>



    </div>
  )
}

export default FruitsMain
