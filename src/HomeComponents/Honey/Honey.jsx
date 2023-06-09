import { useQuery } from '@tanstack/react-query'
import React from 'react'
import SingleHoney from './SingleHoney'

const Honey = () => {

    const {data:honeys=[] }= useQuery({
        queryKey: ['honeys'],
        queryFn: async ( ) => {
            const res = await fetch('http://localhost:5000/homeHoney')
            const data= await res.json()
            return data
        }
    })




   

  return (
    <div className='my-32'>

        <h1 className='text-3xl ml-3 font-medium'>HONEY</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 '>
           {
            honeys.map((honey) => <SingleHoney
            key={honey._id}
            honey={honey}
            ></SingleHoney>)
           }
        </div>



        <div className='text-end mr-6 mt-4'>
            <button className="btn btn-sm bg-[#6CA300] border-none hover:bg-[#6CA300] ">See All</button>
       </div>

    </div>
  )
}

export default Honey
