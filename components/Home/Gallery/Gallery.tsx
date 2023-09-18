import NextImage from "@/components/Shared/Image/NextImage";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import { AiOutlineLine } from "react-icons/ai";

const Gallery = () => {
  return (
    <ComponentWrapper id="gallery" style="bg-white-main w-full lg:py-16 py-10">
      <div className="w-full flex flex-col items-start justify-start gap-10">
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <AiOutlineLine className="text-[28px] text-black-off" />
          <h2 className="text-[32px] text-black-off font-normal">
            알뜰비교 <span className="text-brand-main">서비스</span>
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-6">
          <div className="w-full flex flex-col items-center justify-start gap-6">
            <NextImage
              imageSrc="/Assets/Gallery/1.png"
              imageStyle="object-cover rounded-md"
              containerStyle="h-[275px] w-full rounded-md"
            />
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <p className="text-center text-black-off text-xl font-normal">
                재무진단 서비스
              </p>
              <p className="text-center text-black-off text-base font-normal">
                중복되거나 과다하게 이용중인게 있다면 상담매니저가 최적의
                가이드를 안내해 드립니다
              </p>
            </div>
            <span className="bg-white-off py-2 px-3 rounded cursor-pointer text-black-off text-base font-normal">
              자세히 보기
            </span>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Gallery;
