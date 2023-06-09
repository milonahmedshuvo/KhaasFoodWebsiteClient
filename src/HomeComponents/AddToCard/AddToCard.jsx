import React from 'react'
import { useLoaderData } from "react-router-dom";



const AddToCard = () => {
     const allFruit = useLoaderData()
     console.log(allFruit)
     const { image,Categories, title, subTitle, price, SKU, Quantity, categori } = allFruit
  

  return (
    <div className='flex flex-col md:flex-row mt-14 mb-24'>

         <div className=' w-full md:w-1/2'>
            <img className=' w-full md:w-2/3 mx-auto' src={image} alt="" />
         </div>


         <div className='w-1/2 '>
            <h1 className='text-5xl'>{title}</h1>
            <p className=' text-3xl my-5'>{price}</p>
            <h3 className='text-2xl text-[#008000] mt-16 mb-8'>{subTitle}</h3>

            
            <p className='bg-[#6CA300] py-2 px-4 text-center text-white text-sm rounded-full w-[140px] font-semibold'>ADD TO CARD</p>
            <hr className='my-4' />

            <p className='mt-10'>SKU: <span className='text-[#747474] ml-1 text-sm '>{SKU}</span></p>
            <p className='my-3'>Categoris: <span className='text-[#747474] text-sm '>{Categories}</span></p>
            <p>Quantity: <span className='text-[#747474] text-sm'>{Quantity}</span></p>
         </div>
      
    </div>
  )
}

export default AddToCard
