import React from 'react'
import { Link } from 'react-router-dom'

const ProductSingle = ({ product }) => {

    const {title, image, price, _id } = product



  return (
    <div className='flex flex-col items-center mt-10'>

    <img className='w-3/4' src={image} alt="" />
     <h2>{title}</h2>
     <h3 className='mb-2 mt-7 bg-[#C8E8E4] py-1 px-2 text-sm rounded-full'>{price}</h3>
     <p className='bg-[#6CA300] py-2 px-4 text-center text-white text-sm rounded-full'>
       <Link className='text-white' to={`/addToCard/${_id}`}> ADD TO CARD </Link>
       </p>

      </div>
  )
}

export default ProductSingle
