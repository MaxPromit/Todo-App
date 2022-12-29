import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, History } from "swiper";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
       
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide data-history="1"><img src="https://i.ibb.co/tYr2z94/photo-1499750310107-5fef28a66643-ixlib-rb-4-0.jpg" className="w-full height1" alt="" /></SwiperSlide>
        <SwiperSlide data-history="1"><img src="https://i.ibb.co/0XB7YRn/photo-1540350394557-8d14678e7f91-ixlib-rb-4-0.jpg" className="w-full height1"  alt="" /></SwiperSlide>
        <SwiperSlide data-history="1"><img src="https://i.ibb.co/28pQXH5/photo-1589987607627-616cac5c2c5a-ixlib-rb-4-0.jpg" className="w-full height1"  alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
