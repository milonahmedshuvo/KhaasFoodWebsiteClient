import React from 'react'
import { FaBeer, FaStar, FaStarHalfAlt } from 'react-icons/fa'

const ClientReview = () => {

  return (
    <div className='flex my-36 '>


        <div className='w-1/3 ml-4 mr-4'>
            <h1 className='text-3xl mb-4 text-[#212B36] font-bold'>Clients Say About Us</h1>
            <p>We are very fortunate to have formed excellent partnerships with many of our clients. We have also formed true friendships.</p>
        </div>


        <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8'>


        <div className='border py-6 px-6 '>
            <p className='flex justify-start  mb-6'>
             <FaStar className='ml-2 mt-1 text-[#FFC000] '/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStarHalfAlt className='ml-2 mt-1 mr-3 text-[#FFC000]'/>
            
            <span className='font-semibold '>from Sami ville</span>
            </p>

            <p className='text-sm'>The service is easy to use, it collects a lot of responses from our customers and gives us valuable information about!</p>
        </div>




        <div className='border py-6 px-6 '>
            <p className='flex justify-start  mb-6'>
             <FaStar className='ml-2 mt-1 text-[#FFC000] '/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStarHalfAlt className='ml-2 mt-1 mr-3 text-[#FFC000]'/>
            
            <span className='font-semibold '>from Mikko Kuhalampi</span>
            </p>

            <p className='text-sm'>Excellent service and easy implementation. Quick process to start using and get reviews and testimonials for your web !</p>
        </div>




        <div className='border py-6 px-6 '>
            <p className='flex justify-start  mb-6'>
             <FaStar className='ml-2 mt-1 text-[#FFC000] '/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStarHalfAlt className='ml-2 mt-1 mr-3 text-[#FFC000]'/>
            
            <span className='font-semibold '>from Ilkka Ahonen</span>
            </p>

            <p className='text-sm'>We’re getting precious feedback from our customers and more leads with the help of the reviews. The service is great!!</p>
        </div>





        <div className='border py-6 px-6 '>
            <p className='flex justify-start  mb-6'>
             <FaStar className='ml-2 mt-1 text-[#FFC000] '/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStar className='ml-2 mt-1 text-[#FFC000]'/>
             <FaStarHalfAlt className='ml-2 mt-1 mr-3 text-[#FFC000]'/>
            
            <span className='font-semibold '>from marko wlson</span>
            </p>

            <p className='text-sm'>Platform is super easy to use and is getting better and more versatile all the time!</p>
        </div>




        </div>
      
    </div>
  )
}

export default ClientReview
