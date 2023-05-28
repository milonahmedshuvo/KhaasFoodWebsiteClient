import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";





const Products = () => {


  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
   

    <SwiperSlide className='h-[270px] '>
        <img src="https://www.khaasfood.com/wp-content/uploads/2023/03/Desktop-Main-Banner-1536x461.webp" alt="" />
        <ul>
          <li>FISH </li>
          <li>FISH </li>
          <li>FISH </li>
          <li>FISH </li>
        </ul>
    </SwiperSlide>

</Swiper>
  )
}

export default Products
