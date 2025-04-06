import SearchInput from "./SearchInput";
import HeroCarousel from "./HeroCarousel";
import { HeroShapeLeft, HeroShapeRight } from "./Graphics";
import { PlayIcon } from "../common/Icons";

export default function Hero() {
  return (
    <section className="z-[1]">
      <div className="wrapper">
        <div className="relative">
          <div className="relative pb-2 sm:pb-[12px] md:pb-0">
            <HeroCarousel />

            <div className="z-[99] absolute bottom-0 md:bottom-2.5 lg:bottom-[32px] left-1/2 translate -translate-x-1/2 max-w-full min-w-[207px] py-[11px] sm:py-[13px] lg:py-[17px] sm:px-6 md:px-[45px] lg:px-[40px] flex items-center justify-center bg-white rounded-full shadow-xl">
              <span className="text-[12px] sm:text-sm md:text-lg lg:text-xl font-bold sm:font-extrabold uppercase whitespace-nowrap">Education and Tutoring</span>
            </div>
          </div>

          <div className="sm:absolute top-0 left-0 right-0 w-full h-auto sm:h-[320px] md:h-[495px] lg:h-[579px] flex flex-col items-center justify-between">
            <div className="w-full mt-[28px] sm:mt-0 pb-[22px] sm:p-[24px] md:p-[32px] lg:p-10 sm:pb-0 flex flex-col sm:flex-row sm:justify-between gap-y-[14px]">
              {/* left */}
              <div className="z-[99] relative max-w-[299px] sm:w-[299px] sm:max-w-none md:w-[472px] lg:w-[567px] h-auto mx-auto sm:mx-0">
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

              {/* right */}
              <div className="z-[99] relative max-w-[299px] sm:w-[299px] sm:max-w-none md:w-[472px] lg:w-[567px] mx-auto sm:mx-0 sm:mt-[82px] md:mt-[68px] lg:mt-[80px]">
                <div className="relative">
                  <HeroShapeRight className="w-full h-auto" />

                  <div className="absolute top-0 left-0 w-full h-full pb-5 md:pb-[25px] flex items-center justify-center">
                    <h4 className="text-xl md:text-3xl lg:text-[40px] text-white font-extrabold uppercase leading-relaxed">
                      We`ll <span className="text-[#D0FF00]">handle</span> that
                    </h4>
                  </div>

                  <div className="absolute -bottom-[20px] md:-bottom-[25px] right-[17px] md:right-[27px] lg:right-[45px] h-[40px] md:h-[50px] flex items-center justify-end gap-x-2.5">
                    <button
                      className="h-[40px] md:h-[50px] px-7 flex items-center justify-center bg-[#CBEC5E] text-xs md:text-base text-[#18470D] font-medium rounded-full cursor-pointer"
                      aria-label="Sign Up"
                    >
                      Sign Up for Contract
                    </button>
                    <button className="h-[40px] md:h-[50px] aspect-square shrink-0 flex items-center justify-center bg-white rounded-full cursor-pointer" aria-label="Play">
                      <PlayIcon className="w-[14px] md:w-[18px] aspect-square" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="z-[99] w-full sm:w-[462px] lg:w-[555px] sm:max-w-[90%] mt-[32px]">
              <SearchInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
