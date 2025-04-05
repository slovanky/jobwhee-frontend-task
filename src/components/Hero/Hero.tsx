import Image from "next/image";
import SearchInput from "./SearchInput";

export default function Hero() {
  return (
    <section>
      <div className="wrapper">
        <div className="relative">
          <div className="relative pb-2 sm:pb-2.5">
            <div className="w-full h-[285px] sm:h-[387px] md:h-[596px] lg:h-[715px] bg-black/10 rounded-[18px] sm:rounded-[42px] lg:rounded-[50px] overflow-hidden">
              <Image src="/img/hero-slide-1.jpg" width={1796} height={716} className="w-full h-full object-cover object-center" alt="" />
            </div>
            <div className="absolute bottom-0 left-1/2 translate -translate-x-1/2 max-w-full min-w-[207px] py-[11px] sm:py-[13px] lg:py-[17px] sm:px-6 md:px-[45px] lg:px-[40px] flex items-center justify-center bg-white rounded-full shadow-xl">
              <span className="text-[12px] sm:text-sm md:text-lg lg:text-xl font-bold sm:font-extrabold uppercase whitespace-nowrap">Education and Tutoring</span>
            </div>
          </div>

          <div className="sm:absolute top-0 left-0 right-0 w-full sm:h-[320px] md:h-[495px] lg:h-[579px] flex flex-col items-center justify-between">
            <div>part 1</div>
            <div className="w-full sm:w-[462px] lg:w-[555px] sm:max-w-[90%]">
              <SearchInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
