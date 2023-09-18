import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const Partners = () => {
  const partners = [
    "/Assets/Partners/1.png",
    "/Assets/Partners/2.png",
    "/Assets/Partners/3.png",
    "/Assets/Partners/4.png",
    "/Assets/Partners/5.png",
    "/Assets/Partners/6.png",
    "/Assets/Partners/7.png",
    "/Assets/Partners/8.png",
    "/Assets/Partners/9.png",
    "/Assets/Partners/10.png",
    "/Assets/Partners/11.png",
    "/Assets/Partners/12.png",
    "/Assets/Partners/13.png",
    "/Assets/Partners/14.png",
    "/Assets/Partners/15.png",
  ];
  return (
    <ComponentWrapper id="partners" style="bg-white-off lg:py-16 py-10">
      <div className="w-full grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3">
        {partners.map((item: string, index: number) => (
          <NextImage
            key={index}
            imageSrc={item}
            imageStyle="objext-fill"
            containerStyle="w-full h-[110px] border-b-[1px] border-b-white-off"
          />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Partners;
