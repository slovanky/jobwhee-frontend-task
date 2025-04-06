"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ClientIcon, SearchIcon, TalentIcon } from "../common/Icons";
import { AnimatePresence } from "motion/react";
import { MotionDiv } from "../common/MotionDiv";

export default function SearchInput() {
  const [searchMenuIsOpen, setSearchMenuIsOpen] = useState<boolean>(false);

  const menuElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: { target: Node | null }): void => {
      const cont: boolean = !menuElRef.current?.contains(event.target);

      if (cont) {
        setSearchMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick as () => void);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick as () => void);
    };
  }, [menuElRef]);

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

      <div ref={menuElRef} className="relative">
        <button
          onClick={() => setSearchMenuIsOpen(!searchMenuIsOpen)}
          className="h-[41px] px-3 flex items-center justify-center gap-x-1.5 bg-[#F0F1F4] border border-[#CDCDCD] rounded-full cursor-pointer"
          aria-label="Search Menu"
        >
          <span>Talent</span>
          <ChevronDownIcon className="w-2 h-2 aspect-square" />
        </button>

        <AnimatePresence>
          {searchMenuIsOpen && (
            <MotionDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="z-[99] absolute top-full end-0 w-[230px]"
            >
              <div className="w-full mt-[9px] bg-white rounded-[12px] shadow-xl">
                <ul className="w-full py-[3px]">
                  <li>
                    <button
                      className="w-full px-3 py-1.5 flex items-start justify-start gap-x-1.5 bg-transparent hover:bg-black/5 text-sm font-medium cursor-pointer"
                      aria-label="Search Mode"
                    >
                      <TalentIcon className="w-[22px] h-[22px] aspect-square shrink-0" />
                      <div className="text-start">
                        <h5 className="text-sm text-[#181818] font-medium">Talent</h5>
                        <p className="text-[11px] text-[#3F3C3C]">Hire professionals effortlessly</p>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full px-3 py-1.5 flex items-start justify-start gap-x-1.5 bg-transparent hover:bg-black/5 text-sm font-medium cursor-pointer"
                      aria-label="Search Mode"
                    >
                      <ClientIcon className="w-[22px] h-[22px] aspect-square shrink-0" />
                      <div className="text-start">
                        <h5 className="text-sm text-[#181818] font-medium">Client</h5>
                        <p className="text-[11px] text-[#3F3C3C]">Apply to jobs posted by clients</p>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
