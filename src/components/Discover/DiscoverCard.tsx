import Link from "next/link";
import Image from "next/image";

import { ArrowRightIcon } from "../common/Icons";
import { DiscoverSlide } from "@/Types";

type DiscoverCardProps = {
  slide: DiscoverSlide;
};

export default function DiscoverCard(props: DiscoverCardProps) {
  const { slide } = props;

  return (
    <div className="w-[222px] space-y-[11px]">
      <div className="w-full h-[262px] bg-black/10 rounded-[38px] overflow-hidden">
        <Image src={slide.img} width={262} height={262} className="w-full h-full object-cover object-center" alt="" />
      </div>
      <div className="w-full h-[56px] p-1 ps-[18px] flex items-center gap-x-2 bg-white rounded-full">
        <h4 className="grow text-[14px] text-black font-bold">{slide.title}</h4>
        <Link href="/" className="w-12 h-12 aspect-square flex items-center justify-center bg-[#CBEC5E] text-[#18470D] rounded-full" aria-label="Learn More About Service">
          <ArrowRightIcon className="w-[21px] h-[21px] aspect-square -rotate-45" />
        </Link>
      </div>
    </div>
  );
}
