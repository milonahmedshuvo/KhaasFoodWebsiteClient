import React from 'react'

const BlogImage = ({blog}) => {
   const {image} = blog


  return (
    <div>
      <img src={image} alt="" />
    </div>
  )
}

export default BlogImage
