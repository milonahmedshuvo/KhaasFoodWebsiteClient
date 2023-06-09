import { useQuery } from '@tanstack/react-query'
import React from 'react'
import SingleMeat from './SingleMeat'

const MEAT = () => {

    const { data:meats=[] } = useQuery({
        queryKey: ['meats'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/homeMeat')
            const meat=await res.json()
            return meat 
        }
    })



  return (
    <div className='my-32'>
       <h1 className='text-3xl ml-3 font-medium'>MEAT</h1>

       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 ' >
          {
            meats.map( (meat) => <SingleMeat
            key={meat._id}
            meat={meat}
            ></SingleMeat> )
          }
       </div>


       <div className='text-end mr-6 mt-4'>
            <button className="btn btn-sm bg-[#6CA300] border-none hover:bg-[#6CA300] ">See All</button>
       </div>


    </div>
  )
}

export default MEAT
