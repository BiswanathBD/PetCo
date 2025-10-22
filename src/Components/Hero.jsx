import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]} 
        className="overflow-hidden my-8"
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#f6e05e",
          "--swiper-navigation-size": "3rem",
        }}
      >
        <SwiperSlide>
          <img
            src={hero1}
            alt="Hero Image 1"
            className="md:w-10/12 rounded-xl shadow-2xl mx-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hero2}
            alt="Hero Image 2"
            className="md:w-10/12 rounded-xl shadow-2xl mx-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hero3}
            alt="Hero Image 3"
            className="md:w-10/12 rounded-xl shadow-2xl mx-auto object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;