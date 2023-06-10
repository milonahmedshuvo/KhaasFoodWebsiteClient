import { useQuery } from '@tanstack/react-query'
import React from 'react'
import SingleFish from './SingleFish'
import {Link} from "react-router-dom"




const Fish = () => {

   const {data:fishs=[] } = useQuery({
    queryKey: ['fish'],
    queryFn: async () => {
        const res = await fetch('https://khaas-food-server.vercel.app/homeFish')
        const data= await res.json()
        return data
    }
   })


   
  return (
    <div>
       <h1 className='text-3xl ml-3 font-medium'>Fish</h1>

       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 ' >
           {
            fishs.map( (fish)=> <SingleFish
                  key={fish._id}
                  fish={fish}
                             ></SingleFish>)
           }
       </div>

       <div className='text-end mr-6 mt-4'>
       <button className="btn btn-sm bg-[#6CA300] border-none hover:bg-[#6CA300] ">
        
        <Link to="/fishs" className='text-white font-bold'> See All </Link>
        </button>
       </div>


    </div>
  )
}

export default Fish
