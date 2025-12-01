import React from "react";
import slide1 from "../../assets/SliderImg/Slide1.png";
import slide2 from "../../assets/SliderImg/Slide2.png";
import slide3 from "../../assets/SliderImg/Slider3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // modules
const SwiperBannar = () => {
  const slides = [slide1, slide2, slide3];
  const BannarText = <></>;
  return (
    <div className=" w-[300px] md:w-7xl min-h-60 mx-auto px-3 py-6 ">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={slide}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[300px] md:h-[450px] object-cover object-fit"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBannar;
