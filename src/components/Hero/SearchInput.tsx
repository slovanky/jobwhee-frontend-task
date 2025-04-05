"use client";

import { ChevronDownIcon, SearchIcon } from "../common/Icons";

export default function SearchInput() {
  return (
    <div className="w-full h-[50px] p-1 flex items-center gap-x-[13px] bg-white rounded-full shadow-xl">
      <div className="w-[41px] h-[41px] aspect-square shrink-0 p-0.5 bg-gradient-to-br from-[#A5EC5E] to-[#BDC502] rounded-full">
        <div className="w-full h-full flex items-center justify-center bg-black rounded-full">
          <SearchIcon className="w-5 h-5 aspect-square text-white" />
        </div>
      </div>

      <div className="grow">
        <input type="text" name="" id="" placeholder="Find a job, talent or service" className="w-full text-xs sm:text-sm lg:text-base font-medium outline-0" />
      </div>

      <div className="relative">
        <button className="h-[41px] px-3 flex items-center justify-center gap-x-1.5 bg-[#F0F1F4] border border-[#CDCDCD] rounded-full cursor-pointer">
          <span>Talent</span>
          <ChevronDownIcon className="w-2 h-2 aspect-square" />
        </button>
      </div>
    </div>
  );
}
