import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BlogDetails = () => {
   const blog = useLoaderData()
   console.log(blog)

   const {categori, image, title, subTitle } = blog




  return (
    <div className=' ml-0 md:ml-20 px-10 my-5 md:my-36'>
      
      <h2 className='text-center text-3xl md:text-5xl font-bold my-10'>{categori}</h2>

      <img className='' src={image} alt="" />

      <p className='mt-20'>{title}</p>

      <p className='mt-5 '>{subTitle}</p>
    </div>
  )
}

export default BlogDetails
