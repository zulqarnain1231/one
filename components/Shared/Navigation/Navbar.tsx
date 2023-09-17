import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const menu = [
    {
      name: "회사소개",
      route: "#",
    },
    {
      name: "제품서비스",
      route: "#",
    },
    {
      name: "갤러리",
      route: "#",
    },
    {
      name: "스킨디자인",
      route: "#",
    },
    {
      name: "디자인요소",
      route: "#",
    },
  ];
  return (
    <ComponentWrapper id="navbar" style="h-[100px] w-full bg-white-main">
      <nav className="w-full h-full flex items-center justify-between">
        <Link href={"/"} className={`relative w-[200px] h-[44px]`}>
          <Image
            className={`w-full h-full object-contain`}
            src={"/Assets/logo.png"}
            alt=""
            fill
          />
        </Link>
        <div className="xl:flex hidden items-center justify-center gap-6">
          {menu.map((item: any, index: number) => (
            <div key={index} className="flex items-center justify-center gap-4">
              <Link
                href={item.route}
                className="text-lg text-black-off font-medium hover:scale-105 hover:duration-300"
              >
                {item.name}
              </Link>
              {index < menu.length - 1 && (
                <BsDot className="text-[20px] text-black-off" />
              )}
            </div>
          ))}
        </div>
        <div className="lg:flex hidden items-center justify-start gap-4">
          <FiSearch className="text-[24px] text-black-off cursor-pointer" />
          <Link
            href={"/"}
            className="text-base text-black-off font-medium hover:scale-105 hover:duration-300"
          >
            로그인
          </Link>
          <Link
            href={"/"}
            className="text-base text-black-off font-medium hover:scale-105 hover:duration-300"
          >
            회원가입
          </Link>
        </div>
        <RiMenu3Fill className="lg:hidden inline-block text-[28px] text-black-off cursor-pointer" />
      </nav>
    </ComponentWrapper>
  );
};

export default Navbar;
