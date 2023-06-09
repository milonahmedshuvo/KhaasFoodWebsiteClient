import React from 'react'
import { FaBeer, FaShoppingCart, FaPhoneVolume, FaStore } from 'react-icons/fa'


const ContackUs = () => {



  return (
    <div className='bg-[#F4F6F8] py-16 px-10'>

          
        <div>
            <p className='text-sm'>GreenMart makes online grocery delivery and grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food, great local finds, quick meal solutions, incredible new products and exclusives, and all of your favorite grocery brands. It’s supermarket delivery with so much more: from Fresh Deals that help you save big to convenient delivery windows that work around your schedule, we’ve thought of everything to make grocery home delivery simple for you. We’re a grocery delivery service you can trust as we source only the highest-quality products and deliver them directly to your door.</p>
        </div> 


         <div className='my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>


           <div className='flex bg-[#FFFFFF] py-10'>
              <div className='flex items-center'>
                < FaShoppingCart className='text-4xl text-[#00AB55] mx-2'/>
              </div>
              
                 <div className='ml-6'>
                    <h4 className='text-sm mb-2'>Home Online Shopping</h4>
                    <h5 className='text-lg mt-2 text-black font-medium'>+78 925-942-2900</h5>
                </div>
            </div>



            <div className='flex bg-[#FFFFFF] py-10'>
              <div className='flex items-center'>
                < FaPhoneVolume className='text-4xl text-[#3DBAE1] mx-2'/>
              </div>
              
                 <div className='ml-6'>
                    <h4 className='text-sm mb-2'>Support Center</h4>
                    <h5 className='text-lg mt-2 text-black font-medium'>+78 925-942-2901</h5>
                </div>
            </div>



            <div className='flex bg-[#FFFFFF] py-10'>
              <div className='flex items-center'>
                < FaStore className='text-4xl text-[#F19E20] mx-2'/>
              </div>
              
                 <div className='ml-6'>
                    <h4 className='text-sm mb-2'>Store Locations</h4>
                    <h5 className='text-lg mt-2 text-black font-medium'>View all 5 stores</h5>
                </div>
            </div>


         </div>


    </div>
  )
}

export default ContackUs
