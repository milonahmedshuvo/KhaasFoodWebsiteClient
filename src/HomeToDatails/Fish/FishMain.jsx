import { useQuery } from '@tanstack/react-query'
import React from 'react'
import FishSingle from './FishSingle'

const FishMain = () => {

      const {data:fishs=[]}= useQuery({
        queryKey: ["fishs"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/FishAll")
            const data= res.json()
            return data
        }
      })

  return (
    <div>
       
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 my-28'>

        {
            fishs.map( ( fish) => <FishSingle
                   key={fish._id}
                   fish={fish}
                            ></FishSingle> )
            }

    </div>


    </div>
  )
}

export default FishMain
