import NextImage from "@/components/Shared/Image/NextImage";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const gallery = [
    {
      image: "/Assets/Gallery/1.png",
      title: " 재무진단 서비스",
      detail:
        "중복되거나 과다하게 이용중인게 있다면 상담매니저가 최적의 가이드를 안내해 드립니다",
    },
    {
      image: "/Assets/Gallery/2.png",
      title: " 맞춤컨설팅 서비스",
      detail:
        "제품에에 관한 모든 서비스 제공 및 궁금증에 대한 답을 전문 상담 직원이 준비해 놓고 있습니다",
    },
    {
      image: "/Assets/Gallery/3.png",
      title: "재무설계 컨설팅",
      detail:
        "이용중인 대출도 금융전문가를 만나야 더 좋아집니다. 걱정을 클리닉 받으세요",
    },
  ];
  return (
    <ComponentWrapper id="gallery" style="bg-white-main w-full lg:py-16 py-10">
      <div className="w-full flex flex-col items-start justify-start gap-10">
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <AiOutlineLine className="text-[28px] text-black-off" />
          <h2 className="text-[32px] text-black-off font-normal">
            알뜰비교 <span className="text-brand-main">서비스</span>
          </h2>
        </div>
        <div className="w-full grid md:grid-cols-3 gap-6">
          {gallery.map((item: any, index: number) => (
            <GalleryCard
              key={index}
              title={item.title}
              image={item.image}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Gallery;
