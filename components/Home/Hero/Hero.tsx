"use client";
import React from "react";
import Slider from "react-slick";
import HeroSlide from "./HeroSlide";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`text-white-main flex items-center justify-center absolute md:bottom-[20%] bottom-[10%] z-10 md:right-[10%] right-[5%]`}
      onClick={onClick}
    >
      <FaLongArrowAltRight className="text-[30px] text-white-main" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`text-white-main flex items-center justify-center absolute md:bottom-[20%] bottom-[10%] z-10 md:right-[15%] right-[15%]`}
      onClick={onClick}
    >
      <FaLongArrowAltLeft className="text-[30px] text-white-main" />
    </button>
  );
};
const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="w-full h-[calc(100vh-100px)]">
      <Slider {...settings}>
        {[0, 1, 2].map((item: any, index: number) => (
          <HeroSlide
            key={index}
            title="같은비용, 넓은 보장 알뜰보험상담소"
            detail="살펴보지 못한 나의 보험을 알뜰보험상담소에서 확인해보세요"
            background="bg-[url('/Assets/Hero/HeroBg.jpg')]"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
