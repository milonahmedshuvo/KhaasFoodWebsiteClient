import React from 'react'

const SingleHoney = ({honey}) => {

    const {title,image, price } = honey


    

  return (
    <div>

      <div className='flex flex-col items-center'>
        <img className='w-3/4' src={image} alt="" />
         <h2>{title}</h2>
         <h3 className='mb-2 mt-7 bg-[#C8E8E4] py-1 px-2 text-sm rounded-full'>{price}</h3>
         <p className='bg-[#6CA300] py-2 px-4 text-center text-white text-sm rounded-full'>ADD TO CARD</p>

         </div>


            </div>
  )
}

export default SingleHoney
