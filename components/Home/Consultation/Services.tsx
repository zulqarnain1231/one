import NextImage from "@/components/Shared/Image/NextImage";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-full grid lg:grid-cols-2 gap-6">
      <div className="w-full flex sm:flex-row flex-col sm:items-start items-center justify-start gap-6 bg-brand-secondary rounded p-8">
        <NextImage
          containerStyle="h-[90px] w-[90px] flex-shrink-0"
          imageSrc="/Assets/Consultation/PieChart.png"
          imageStyle="object-contain"
        />
        <div className="flex flex-col sm:items-start items-center justify-start gap-3">
          <h3 className="text-black-off text-2xl font-medium">
            무료 재무컨설팅
          </h3>
          <p className="text-base text-black-off text-center sm:text-left font-normal">
            어떤 서비스가 가입되어 있는지 확인이 필요할 때 광고없는
            알뜰분석서비스를 이용하세요
          </p>
          <FaLongArrowAltRight className="text-xl text-black-off cursor-pointer" />
        </div>
      </div>

      <div className="w-full flex sm:flex-row flex-col sm:items-start items-center justify-start gap-6 bg-brand-main rounded p-8">
        <NextImage
          containerStyle="h-[90px] w-[90px] flex-shrink-0"
          imageSrc="/Assets/Consultation/Monitor.png"
          imageStyle="object-contain"
        />
        <div className="flex flex-col sm:items-start items-center justify-start gap-3">
          <h3 className="text-white-main text-2xl font-medium">
            알뜰견적 문의하기
          </h3>
          <p className="text-base text-white-main text-center sm:text-left font-normal">
            최신상품 문의가 필요한 경우 문의신청을 주시면 제품전문가 답변을
            드립니다.
          </p>
          <FaLongArrowAltRight className="text-xl text-white-main cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Services;
