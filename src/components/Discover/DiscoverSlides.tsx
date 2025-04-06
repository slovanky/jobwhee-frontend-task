"use client";

import { useCallback, useRef } from "react";

// Swiper
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import DiscoverCard from "./DiscoverCard";

import { Arrow2RightIcon } from "../common/Icons";

import { DiscoverSlide } from "@/Types";

type DiscoverSlidesProps = {
  slideList: DiscoverSlide[];
};

export default function DiscoverSlides(props: DiscoverSlidesProps) {
  const { slideList } = props;

  const sliderRef = useRef<SwiperRef>(null);

  const onPrevSlide = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const onNextSlide = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="space-y-8">
      <Swiper
        id="discover-swiper"
        className="!overflow-visible md:!overflow-hidden"
        ref={sliderRef}
        modules={[A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView="auto"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slideList &&
          slideList.map((slide) => (
            <SwiperSlide key={slide.id} style={{ width: "auto" }}>
              <DiscoverCard slide={slide} />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="hidden sm:flex items-center justify-center gap-x-[24px]">
        <button
          title="Prev"
          onClick={onPrevSlide}
          className="w-[63px] h-[63px] aspect-square flex items-center justify-center gap-2 bg-white text-black rounded-full cursor-pointer"
          aria-label="Prev"
        >
          <Arrow2RightIcon className="h-5 w-5 md:h-6 md:w-6 aspect-square rotate-180" />
        </button>
        <button
          title="Next"
          onClick={onNextSlide}
          className="w-[63px] h-[63px] aspect-square flex items-center justify-center gap-2 bg-white text-black rounded-full cursor-pointer"
          aria-label="Next"
        >
          <Arrow2RightIcon className="h-5 w-5 md:h-6 md:w-6 aspect-square" />
        </button>
      </div>
    </div>
  );
}
