import Image from "next/image";
import Link from "next/link";
import LanguageMenu from "./LanguageMenu";
import { MenuSquaresIcon } from "../common/Icons";

export default function Header() {
  return (
    <section className="pt-[30px] sm:pt-[25px]">
      <div className="wrapper">
        <div className="w-full h-11 sm:h-[54px] md:h-[62px] lg:h-[74px] bg-black rounded-full">
          <div className="w-full h-full ps-4 md:ps-6 pe-[5px] sm:pe-2 md:pe-[13px] flex items-center justify-between">
            <Link href="/" aria-label="Home">
              <Image src="/img/logo.svg" width={171} height={27.33} className="w-[108px] md:w-[142px] lg:w-[171px] h-auto" alt="" />
            </Link>

            <div className="hidden md:block">
              <ul className="flex items-center gap-x-3.5 md:gap-x-[26px] lg:gap-x-8">
                <li>
                  <Link href="/" className="text-sm lg:text-base text-white font-semibold" aria-label="Post a Job">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm lg:text-base text-white font-semibold" aria-label="Explore Jobs">
                    Explore Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm lg:text-base text-white font-semibold" aria-label="How It Works">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-x-1.5">
              <div className="hidden md:block">
                <LanguageMenu />
              </div>

              <Link
                href="/"
                className="w-[100px] lg:w-[122px] py-1.5 sm:py-2.5 lg:py-[13px] hidden md:flex items-center justify-center bg-transparent text-sm text-white font-medium border border-[#949494]/50 rounded-full"
              >
                Sign In
              </Link>

              <Link
                href="/"
                className="w-[100px] lg:w-[122px] py-1.5 sm:py-2.5 lg:py-[13px] flex items-center justify-center bg-white text-sm text-[#020202] font-medium border border-transparent rounded-full"
              >
                Sign Up
              </Link>

              <button
                className="w-[34px] sm:w-[42px] aspect-square shrink-0 flex md:hidden items-center justify-center bg-white rounded-full cursor-pointer"
                aria-label="Navbar Menu"
              >
                <MenuSquaresIcon className="w-[18px] h-[18px] aspect-square" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
