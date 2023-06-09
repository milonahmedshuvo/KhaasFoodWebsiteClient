import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[400px]"
      >
        <SwiperSlide>
          <img
            src="https://www.khaasfood.com/wp-content/uploads/2023/05/Website-Banner-1900-X-570-1-1536x461.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://www.khaasfood.com/wp-content/uploads/2023/05/Website-Banner-1900-X-570-01-1536x461.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://www.khaasfood.com/wp-content/uploads/2023/03/Desktop-Main-Banner-1536x461.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://www.khaasfood.com/wp-content/uploads/2022/12/1900-570-1536x461.webp"
            alt=""
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 18 18" ref={progressCircle}>
            {/* <circle cx="24" cy="24" r="20"></circle> */}
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
