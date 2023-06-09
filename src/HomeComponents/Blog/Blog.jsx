import { useQuery } from '@tanstack/react-query'
import React from 'react'
import BlogImage from './BlogImage'

const Blog = () => {


    const {data:blogs=[]} = useQuery({
        queryKey:['blogs'],
        queryFn: async ( ) => {
            const res = await fetch('http://localhost:5000/blogImage')
            const data = res.json()
            return data
        }
    })


  return (
    <div className='my-36 '>
          <h2 className='text-3xl ml-3 font-medium my-5'>LATEST BLOG POSTS</h2>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-3 '>
               {
                blogs.map((blog) => <BlogImage
                      key={blog._id}
                      blog={blog}
                     ></BlogImage>)
                }
           </div>
              
    </div>
  )
}

export default Blog
