import Image from "next/image";
import SearchInput from "./SearchInput";
import { HeroBottomCurve, HeroShapeLeft, HeroShapeRight } from "./Graphics";
import { PlayIcon } from "../common/Icons";

export default function Hero() {
  return (
    <section>
      <div className="wrapper">
        <div className="relative">
          <div className="relative pb-2 sm:pb-0">
            <div className="relative w-full h-[285px] sm:h-[387px] md:h-[596px] lg:h-[715px] bg-black/10 rounded-[18px] sm:rounded-[42px] lg:rounded-[50px] overflow-hidden">
              <Image src="/img/hero-slide-1.jpg" width={1796} height={716} className="w-full h-full object-cover object-center" alt="" />
              <HeroBottomCurve className="absolute -bottom-px left-1/2 translate -translate-x-1/2 w-[70%] h-auto text-[#F0F1F4]" />
            </div>

            <div className="absolute bottom-0 md:bottom-2.5 lg:bottom-[32px] left-1/2 translate -translate-x-1/2 max-w-full min-w-[207px] py-[11px] sm:py-[13px] lg:py-[17px] sm:px-6 md:px-[45px] lg:px-[40px] flex items-center justify-center bg-white rounded-full shadow-xl">
              <span className="text-[12px] sm:text-sm md:text-lg lg:text-xl font-bold sm:font-extrabold uppercase whitespace-nowrap">Education and Tutoring</span>
            </div>
          </div>

          <div className="sm:absolute top-0 left-0 right-0 w-full h-auto sm:h-[320px] md:h-[495px] lg:h-[579px] flex flex-col items-center justify-between">
            <div className="w-full sm:p-[24px] md:p-[32px] lg:p-10 pb-0 flex flex-col sm:flex-row sm:justify-between gap-y-[14px]">
              <div className="relative sm:w-[299px] md:w-[472px] lg:w-[567px] h-auto">
                <div className="relative">
                  <HeroShapeLeft className="w-full h-auto" />

                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h4 className="text-xl md:text-3xl lg:text-[40px] text-white font-extrabold uppercase leading-relaxed">
                      Find the <span className="text-[#D0FF00]">talent</span> sign up
                      <br />& get The <span className="text-[#D0FF00]">job</span> done
                    </h4>
                  </div>
                </div>
              </div>

              <div className="relative sm:w-[299px] md:w-[472px] lg:w-[567px] sm:mt-[82px] md:mt-[68px] lg:mt-[80px]">
                <div className="relative">
                  <HeroShapeRight className="w-full h-auto" />

                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h4 className="text-xl md:text-3xl lg:text-[40px] text-white font-extrabold uppercase leading-relaxed">
                      We`ll <span className="text-[#D0FF00]">handle</span> that
                    </h4>
                  </div>

                  <div className="absolute -bottom-[20px] md:-bottom-[25px] right-[45px] h-[40px] md:h-[50px] flex items-center justify-end gap-x-2.5">
                    <button className="h-[40px] sm:h-[50px] px-7 flex items-center justify-center bg-[#CBEC5E] text-xs md:text-base text-[#18470D] font-medium rounded-full cursor-pointer">
                      Sign Up for Contract
                    </button>
                    <button className="h-[40px] sm:h-[50px] w-[50px] aspect-square shrink-0 flex items-center justify-center bg-white rounded-full cursor-pointer">
                      <PlayIcon className="w-[14px] md:w-[18px] aspect-square" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[462px] lg:w-[555px] sm:max-w-[90%]">
              <SearchInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
