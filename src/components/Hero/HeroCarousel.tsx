"use client";

import { useRef } from "react";

// Swiper
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { HeroBottomCurve } from "./Graphics";
import Image from "next/image";

export default function HeroCarousel() {
  const sliderRef = useRef<SwiperRef>(null);

  return (
    <div className="space-y-8">
      <Swiper
        id="hero-swiper"
        ref={sliderRef}
        modules={[A11y, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="relative w-full h-[285px] sm:h-[387px] md:h-[596px] lg:h-[715px] bg-black/10 rounded-[18px] sm:rounded-[42px] lg:rounded-[50px] overflow-hidden">
            <Image src="/img/hero-slide-1.jpg" width={1796} height={716} className="w-full h-full object-cover object-center" alt="" />
            <HeroBottomCurve className="absolute -bottom-px left-1/2 translate -translate-x-1/2 w-[70%] h-auto text-[#F0F1F4]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[285px] sm:h-[387px] md:h-[596px] lg:h-[715px] bg-black/10 rounded-[18px] sm:rounded-[42px] lg:rounded-[50px] overflow-hidden">
            <Image src="/img/hero-slide-1.jpg" width={1796} height={716} className="w-full h-full object-cover object-center" alt="" />
            <HeroBottomCurve className="absolute -bottom-px left-1/2 translate -translate-x-1/2 w-[70%] h-auto text-[#F0F1F4]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[285px] sm:h-[387px] md:h-[596px] lg:h-[715px] bg-black/10 rounded-[18px] sm:rounded-[42px] lg:rounded-[50px] overflow-hidden">
            <Image src="/img/hero-slide-1.jpg" width={1796} height={716} className="w-full h-full object-cover object-center" alt="" />
            <HeroBottomCurve className="absolute -bottom-px left-1/2 translate -translate-x-1/2 w-[70%] h-auto text-[#F0F1F4]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[285px] sm:h-[387px] md:h-[596px] lg:h-[715px] bg-black/10 rounded-[18px] sm:rounded-[42px] lg:rounded-[50px] overflow-hidden">
            <Image src="/img/hero-slide-1.jpg" width={1796} height={716} className="w-full h-full object-cover object-center" alt="" />
            <HeroBottomCurve className="absolute -bottom-px left-1/2 translate -translate-x-1/2 w-[70%] h-auto text-[#F0F1F4]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
