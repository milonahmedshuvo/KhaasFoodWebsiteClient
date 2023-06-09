import React from 'react'
import { Link } from 'react-router-dom'


const SingleFish = ({fish}) => {


    const {title,image, price, _id } = fish


  return (
    <div>

    <div className='flex flex-col items-center'>
        <img className='w-3/4' src={image} alt="" />
         <h2>{title}</h2>
         <h3 className='mb-2 mt-7 bg-[#C8E8E4] py-1 px-2 text-sm rounded-full'>{price}</h3>
         <p className='bg-[#6CA300] py-2 px-4 text-center text-white text-sm rounded-full'>
                <Link className='text-white' to={`/addToCard/${_id}`}> ADD TO CARD </Link>
                </p>

    </div>


     </div>
  )
}

export default SingleFish
