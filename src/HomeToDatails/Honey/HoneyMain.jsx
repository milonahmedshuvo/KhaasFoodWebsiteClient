import { useQuery } from '@tanstack/react-query'
import React from 'react'
import AllSingle from './AllSingle'

const HoneyMain = () => {

      const {data:honeys=[]} = useQuery({
        queryKey: ['honeys'],
        queryFn: async ( ) => {
            const res = await fetch('http://localhost:5000/honeyAll')
            const data= res.json()
            return data
        }
      })





  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 my-28'>

    {
     honeys.map( ( honey) => <AllSingle
            key={honey._id}
            honey={honey}
                            ></AllSingle> )
    }

</div>
    </div>
  )
}

export default HoneyMain
