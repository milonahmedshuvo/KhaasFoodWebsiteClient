import React from 'react'

const OurShop = () => {


  return (
   <div>


     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  bg-[#59793D] py-20'>

         {/* div 1 */}
       <div>

          
         <div className='flex justify-center'>
            <div className='w-3/4 text-end mr-3 '>
                 <h2 className='text-white font-semibold my-4 text-xl'>Pure and safe Grocery Store</h2>
                 <p className='text-white'>We focus on ensuring sound health by delivering adulteration, additives & chemical free pure and safe grocery food at consumers’ doorstep.</p>
            </div>

            <img className='w-[80px] h-[80px] mx-2 mt-4' src="https://www.khaasfood.com/wp-content/uploads/2020/06/healdy-1.png" alt="" />
         </div>



         <div className='flex my-10 '>
            <div className='w-3/4 text-end mr-3 '>
                 <h2 className='text-white font-semibold my-4 text-xl'>Pure and safe Grocery Store</h2>
                 <p className='text-white'>We focus on ensuring sound health by delivering adulteration, additives & chemical free pure and safe grocery food at consumers’ doorstep.</p>
            </div>

            <img className='w-[80px] h-[80px] mx-2 mt-4' src="https://www.khaasfood.com/wp-content/uploads/2020/06/healdy-1.png" alt="" />
         </div>


       </div>


       {/* div 2 */}

       <div className='flex justify-center'>
           <img src="https://www.khaasfood.com/wp-content/uploads/2023/01/New-Project-25.webp" alt="" />
       </div>




       {/* div 3 */}

       <div>

             <div className='flex'>
                <img
                className='w-[80px] h-[80px] mx-2 mt-4' 
                src="https://www.khaasfood.com/wp-content/uploads/2020/06/honey-1.png" alt="" />


                    <div className='w-3/4 text-start mr-3 ml-2'>
                        <h2 className='text-white font-semibold my-4 text-xl'>Pure and safe Grocery Store</h2>
                          <p className='text-white'>We focus on ensuring sound health by delivering adulteration, additives & chemical free pure and safe grocery food at consumers’ doorstep.</p>
                      </div>
             </div>




             <div className='flex my-10'>
                <img
                className='w-[80px] h-[80px] mx-2 mt-4' 
                src="https://www.khaasfood.com/wp-content/uploads/2020/06/environmantal-1.png" alt="" />


                    <div className='w-3/4 text-start mr-3 ml-2'>
                        <h2 className='text-white font-semibold my-4 text-xl'>Pure and safe Grocery Store</h2>
                          <p className='text-white'>We focus on ensuring sound health by delivering adulteration, additives & chemical free pure and safe grocery food at consumers’ doorstep.</p>
                      </div>
             </div>

            
         </div>


    </div>
   </div>
  )
}

export default OurShop
