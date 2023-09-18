import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineRemove } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <ComponentWrapper id="footer" style="lg:py-12 py-10 bg-white-off">
      <footer className="w-full flex lg:flex-row flex-col lg:items-start items-center justify-start lg:gap-20 gap-10">
        <Link
          href={"/"}
          className={`relative w-[200px] h-[44px] flex-shrink-0`}
        >
          <Image
            className={`w-full h-full object-contain`}
            src={"/Assets/logo.png"}
            alt=""
            fill
          />
        </Link>
        <div className="h-full flex flex-col lg:items-start items-center justify-start gap-4">
          <div className=" flex sm:flex-row flex-col items-center justify-start gap-4">
            <p className="text-base text-black-off font-normal">
              개인정보 처리방침
            </p>
            <MdOutlineRemove className="text-black-faded/50 text-2xl rotate-90 sm:inline-block hidden" />
            <p className="text-base text-black-off font-normal">
              이메일무단수집거부
            </p>
            <MdOutlineRemove className="text-black-faded/50 text-2xl rotate-90 sm:inline-block hidden" />
            <p className="text-base text-black-off font-normal">이용약관</p>
            <MdOutlineRemove className="text-black-faded/50 text-2xl rotate-90 sm:inline-block hidden" />
          </div>
          <p className="text-base lg:text-left text-center text-black-off/60 font-normal">
            그라피코스 스튜디오 서울사무실 사무실장 신영빈 사업자등록번호
            117-13-49878 서울시 노원구 공릉2동 26-21 제1실습관 507호
          </p>
          <p className="text-base lg:text-left text-center text-black-off/60 font-normal">
            Tel. 070-7566-1666 E-mail. touchxe@gmail.com
          </p>
          <p className="text-base lg:text-left text-center text-black-off/60 font-normal">
            Copyright © {year} 그라피코스 All Rights Reserved.
          </p>
        </div>
      </footer>
    </ComponentWrapper>
  );
};

export default Footer;
