"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Banner = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 6000 }}
        className="flex justify-center items-center"
      >
        <SwiperSlide>
          <div>
            <img src="/banner/1.jpeg" alt="logo empresa jonife" className="flex justify-center items-center h-aut" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/banner/2.jpeg" alt="logo empresa jonife" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/banner/3.jpeg" alt="logo empresa jonife" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/banner/4.jpeg" alt="logo empresa jonife" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="/banner/5.jpeg" alt="logo empresa jonife" className="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
