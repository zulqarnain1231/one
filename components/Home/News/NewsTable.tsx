import NextImage from "@/components/Shared/Image/NextImage";
import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const NewsTable = () => {
  const news = [
    {
      title: "케이테마 카드결제 서비스 제공",
      date: "2023.02.24",
    },
    {
      title: "케이테마 마켓 서비스개시",
      date: "2023.02.24",
    },
    {
      title: "안녕하세요, K-THEME 운영자입니다.",
      date: "2023.02.16",
    },
    {
      title: "워드프레스 테마개발자를 위한 강좌가 개설되었습니다.",
      date: "2023.02.15",
    },
    {
      title: "2023 ICU 디자인컨퍼런스 개최안내드립니다.",
      date: "2023.02.15",
    },
  ];
  return (
    <div className="w-full flex flex-col items-start justify-start gap-8">
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <AiOutlineLine className="text-[28px] text-black-off" />
        <h2 className="text-[32px] text-black-off font-normal">
          알뜰서비스<span className="text-brand-main">새소식</span>
        </h2>
      </div>
      <div className="w-full grid xl:grid-cols-2 gap-8">
        {/* left side */}
        <div className="w-full flex flex-col items-start justify-start">
          {news.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full flex items-center justify-between gap-3 py-3 border-b-[2px] border-b-white-off"
            >
              <div className="flex items-center justify-start gap-1">
                <BsDot className="text-[20px] text-black-faded" />
                <p className="text-black-off sm:text-base text-sm font-normal">
                  {item.title}
                </p>
              </div>

              <p className="text-xs text-black-faded font-normal">
                {item.date}
              </p>
            </div>
          ))}
        </div>
        {/* right side */}
        <div className="w-full grid sm:grid-cols-2 gap-4">
          <div className="w-full h-[190px] flex flex-col items-center justify-center gap-3 rounded bg-white-off ">
            <NextImage
              imageSrc="/Assets/Consultation/Monitor.png"
              containerStyle="h-[80px] w-[80px]"
              imageStyle="object-contain"
            />
            <p className="text-base text-black-off font-medium">투자성향분석</p>
          </div>
          <div className="w-full h-[190px] flex flex-col items-center justify-center gap-3 rounded bg-white-off ">
            <NextImage
              imageSrc="/Assets/Consultation/Pencil.png"
              containerStyle="h-[80px] w-[80px]"
              imageStyle="object-contain"
            />
            <p className="text-base text-black-off font-medium">컨설팅상담</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTable;
