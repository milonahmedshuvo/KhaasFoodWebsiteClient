import React from 'react'
import { Link } from 'react-router-dom'

const BlogImage = ({blog}) => {
   const {image, _id } = blog


  return (
    <div>
     <Link to={`/blogDetails/${_id}`}> <img src={image} alt="" /></Link>
    </div>
  )
}

export default BlogImage
