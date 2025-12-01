import React from "react";
import slide1 from "../../assets/SliderImg/Slide1.jpg";
import slide2 from "../../assets/SliderImg/Slide2.jpg";
import slide3 from "../../assets/SliderImg/Slide3.jpg";
import slide4 from "../../assets/SliderImg/Slide4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // modules
const SwiperBannar = () => {
  const slides = [slide1, slide2, slide3, slide4];
  const BannarText = <></>;
  return (
    <div className=" md:w-6xl min-h-60 mx-auto px-3 py-6 ">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl overflow-hidden shadow-lg w-[300px] md:w-6xl"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
              <img
                src={slide1}
                alt={`Slide ${idx + 1}`}
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBannar;
