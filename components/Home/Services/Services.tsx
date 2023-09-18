import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import * as Icons from "../../../constants/Svg/Icons";
const Services = () => {
  const services = [
    {
      name: "인기제품",
      icon: (
        <Icons.Tick
          ClassName="h-[50px] w-[50px] text-black-off"
          fill=""
          stroke=""
        />
      ),
    },
    {
      name: "자동차용품",
      icon: (
        <Icons.Car
          ClassName="h-[50px] w-[50px] text-black-off"
          fill=""
          stroke=""
        />
      ),
    },
    {
      name: "여행용품",
      icon: (
        <Icons.AirPlane
          ClassName="h-[50px] w-[50px] text-black-off"
          fill=""
          stroke=""
        />
      ),
    },
    {
      name: "실버용품",
      icon: (
        <Icons.Person
          ClassName="h-[50px] w-[50px] text-black-off"
          fill=""
          stroke=""
        />
      ),
    },
    {
      name: "아동용품",
      icon: (
        <Icons.Baby
          ClassName="h-[50px] w-[50px] text-black-off"
          fill=""
          stroke=""
        />
      ),
    },
    {
      name: "건강용품",
      icon: (
        <Icons.Heart
          ClassName="h-[50px] w-[50px] text-black-off"
          fill=""
          stroke=""
        />
      ),
    },
    {
      name: "에코용품",
      icon: (
        <Icons.Plant
          ClassName="h-[50px] w-[50px] text-black-off"
          fill=""
          stroke=""
        />
      ),
    },
    {
      name: "금융제품",
      icon: (
        <Icons.Saving
          ClassName="h-[50px] w-[50px] text-black-off"
          fill=""
          stroke=""
        />
      ),
    },
  ];
  return (
    <ComponentWrapper id="services" style="w-full bg-white-off lg:py-16 py-10">
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {services.map((item: any, index: number) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-center gap-6 bg-white-main roudned px-4 py-8"
          >
            {item.icon}
            <p className="text-black-off text-[20px] font-normal">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Services;
