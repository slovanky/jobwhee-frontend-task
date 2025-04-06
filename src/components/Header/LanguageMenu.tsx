"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, EnFlagIcon, GreekFlagIcon } from "@/components/common/Icons";
import { MotionDiv } from "../common/MotionDiv";
import { AnimatePresence } from "motion/react";

export default function LanguageMenu() {
  const [langMenuIsOpen, setLangMenuIsOpen] = useState<boolean>(false);

  const menuElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: { target: Node | null }): void => {
      const cont: boolean = !menuElRef.current?.contains(event.target);

      if (cont) {
        setLangMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick as () => void);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick as () => void);
    };
  }, [menuElRef]);

  return (
    <div ref={menuElRef} className="relative">
      <button
        onClick={() => setLangMenuIsOpen(!langMenuIsOpen)}
        className="py-[7px] lg:py-[11px] px-[18px] flex items-center justify-center gap-x-1 bg-transparent text-sm text-white font-medium border border-[#949494]/50 rounded-full cursor-pointer"
      >
        <EnFlagIcon className="w-6 h-6 aspect-square -ms-2.5 bg-white/10 rounded-full" />
        <span className="ms-2">EN</span>
        <ChevronDownIcon className="w-2.5 h-2.5 aspect-square text-white" />
      </button>

      <AnimatePresence>
        {langMenuIsOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="z-[99] absolute top-full left-1/2 transform -translate-x-1/2 w-[130px]"
          >
            <div className="w-full mt-[9px] bg-black border border-[#949494]/50 rounded-[14px]">
              <ul className="px-2 divide-y divide-[#4A4A4A]">
                <li>
                  <button className="py-1.5 flex items-center gap-x-[9px] text-sm text-white font-medium cursor-pointer">
                    <EnFlagIcon className="w-6 h-6 aspect-square bg-white/10 rounded-full" />
                    <span className="text-xs md:text-base">English</span>
                  </button>
                </li>
                <li>
                  <button className="py-1.5 flex items-center gap-x-[9px] text-sm text-white font-medium cursor-pointer">
                    <GreekFlagIcon className="w-6 h-6 aspect-square bg-white/10 rounded-full" />
                    <span className="text-xs sm:text-base">Greek</span>
                  </button>
                </li>
              </ul>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}
