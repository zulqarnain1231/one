"use client";
import React, { useState, useEffect } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ImCross } from "react-icons/im";
import { Link as Scrolling } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [Show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };

  const menu = [
    {
      name: "회사소개",
      route: "news",
    },
    {
      name: "제품서비스",
      route: "service",
    },
    {
      name: "갤러리",
      route: "gallery",
    },
    {
      name: "스킨디자인",
      route: "",
    },
    {
      name: "디자인요소",
      route: "",
    },
  ];

  return (
    <>
      <ComponentWrapper
        id="navbar"
        style={`h-[100px] w-full bg-white-main z-20 sticky top-0 ${
          Show && "md:-top-[100px]"
        } transition-all duration-1000`}
      >
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
              <div
                key={index}
                className="flex items-center justify-center gap-4"
              >
                <Scrolling
                  key={index}
                  activeClass="active"
                  to={item.route}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={1000}
                  className="text-lg text-black-off font-medium hover:scale-105 hover:text-brand-main hover:duration-300 cursor-pointer"
                >
                  {item.name}
                </Scrolling>
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
              className="text-base text-black-off font-medium hover:scale-105 hover:text-brand-main hover:duration-300"
            >
              로그인
            </Link>
            <Link
              href={"/"}
              className="text-base text-black-off font-medium hover:scale-105 hover:text-brand-main hover:duration-300"
            >
              회원가입
            </Link>
          </div>
          <RiMenu3Fill
            onClick={toggleDrawer}
            className="lg:hidden inline-block text-[28px] text-black-off cursor-pointer"
          />
        </nav>
      </ComponentWrapper>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{ width: "100%" }}
        className="bg-white-main"
      >
        <div className="w-full flex flex-col items-start justify-start bg-white-main/30">
          <div className="w-full flex items-center justify-end p-4 border-b-[2px]">
            <button onClick={toggleDrawer}>
              <ImCross className="text-[24px] text-black-main" />
            </button>
          </div>
          {menu.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full flex items-center justify-start p-4 border-b-[2px] "
            >
              <Scrolling
                key={index}
                activeClass="active"
                to={item.route}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1000}
                onClick={toggleDrawer}
                className="text-lg text-black-off font-medium hover:scale-105 hover:text-brand-main hover:duration-300"
              >
                {item.name}
              </Scrolling>
            </div>
          ))}
          <div className="w-full flex items-center justify-start p-4 border-b-[2px] ">
            <Link
              href={"/"}
              onClick={toggleDrawer}
              className="text-lg text-black-off font-medium hover:scale-105 hover:text-brand-main hover:duration-300"
            >
              로그인
            </Link>
          </div>
          <div className="w-full flex items-center justify-start p-4 border-b-[2px] ">
            <Link
              href={"/"}
              onClick={toggleDrawer}
              className="text-lg text-black-off font-medium hover:scale-105 hover:text-brand-main hover:duration-300"
            >
              {" "}
              회원가입
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
