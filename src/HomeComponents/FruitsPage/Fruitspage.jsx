import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Fruits from './Fruits'
import { Link } from 'react-router-dom'




const Fruitspage = () => {

  const {data:fruits=[]}= useQuery({
    queryKey: ['fruits'],
    queryFn: async ()=> {
      const res = await fetch('https://khaas-food-server.vercel.app/homeFruits')
      const data= await res.json()
      return data
    }
  })
  

  return (
    <div className='my-32'>
      <h1 className='text-3xl ml-3 font-medium'>FRUITS</h1>
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 '>

       {
            fruits.map( ( food) => <Fruits
                   key={food._id}
                   food={food}
                                   ></Fruits> )
           }

       </div>

       <div className='text-end mr-6 mt-4'>
       <button className="btn btn-sm bg-[#6CA300] border-none hover:bg-[#6CA300] ">
        <Link to="/fruits"  className='text-white font-bold'>See All</Link>
        </button>
       </div>
    </div>
  )
}

export default Fruitspage
