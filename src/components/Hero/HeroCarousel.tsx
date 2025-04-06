"use client";

import { useRef } from "react";

// Swiper
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

export default function HeroCarousel() {
  const sliderRef = useRef<SwiperRef>(null);

  const carouselList: string[] = ["/img/hero-slide-1.jpg", "/img/hero-slide-1.jpg", "/img/hero-slide-1.jpg", "/img/hero-slide-1.jpg", "/img/hero-slide-1.jpg"];

  return (
    <div className="space-y-8">
      <Swiper
        id="hero-swiper"
        ref={sliderRef}
        modules={[A11y, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {carouselList &&
          carouselList.map((slide, index) => (
            <SwiperSlide key={`hero-carousel-slide-${index}`}>
              <div className="w-full h-[285px] sm:h-[387px] md:h-[596px] lg:h-[715px] bg-black/10">
                <Image src={slide} width={1796} height={716} className="w-full h-full object-cover object-center" priority alt="" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
