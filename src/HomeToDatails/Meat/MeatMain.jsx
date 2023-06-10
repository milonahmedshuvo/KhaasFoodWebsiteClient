import { useQuery } from '@tanstack/react-query'
import React from 'react'
import MeatSingls from './MeatSingls'

const MeatMain = () => {

      const {data:meats=[]} = useQuery({
        queryKey: ['meats'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/MeatSee")
            const data= await res.json()
            return data
        }
      })




  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 my-28'>

    {
     meats.map( ( meat) => <MeatSingls
            key={meat._id}
            meat={meat}
                            ></MeatSingls> )
    }

      </div>
  )
}

export default MeatMain
