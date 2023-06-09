import React from 'react'
import { FaBeer, FaHome, FaPhoneVolume, FaTruck, FaSlash } from 'react-icons/fa';


const OurService = () => {



  return (
    <div className='bg-[#EAE9E8] pt-10 pb-10 '>
          <h1 className='text-center text-3xl pb-14 font-semibold '> OUR PRIDE </h1>


       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
           <div className='flex flex-col items-center'>
               <FaHome className='text-4xl'/>
               <p className='text-[#213547] text-2xl font-medium mt-16 mb-5'>Physical presence</p>
               <p className='text-sm'>15+ Outlets All Over the Country</p>
           </div>


           <div className='flex flex-col items-center'>
               <FaTruck className='text-4xl'/>
               <p className='text-[#213547] text-2xl font-medium mt-16 mb-5'>7 Years of Service</p>
               <p className='text-sm'>200+ SKUs</p>
           </div>


           <div className='flex flex-col items-center'>
               <FaPhoneVolume className='text-4xl'/>
               <p className='text-[#213547] text-2xl font-medium mt-16 mb-5'>Customers First</p>
               <p className='text-sm'>Immediate Response on any Queries</p>
           </div>



           <div className='flex flex-col items-center'>
               <FaSlash className='text-4xl'/>
               <p className='text-[#213547] text-2xl font-medium mt-16 mb-5'>Quality Guaranteed</p>
               <p className='text-sm'>Ensuring Safe Food By Any Means</p>
           </div>
       </div>



    </div>
  )
}

export default OurService
