import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineLine } from "react-icons/ai";
import NewsTable from "./NewsTable";

const News = () => {
  return (
    <ComponentWrapper id="news" style="bg-white-main lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-16">
        <div className="w-full flex flex-col items-start justify-start gap-6 bg-[url('/Assets/About.png')] bg-fill bg-top bg-no-repeat md:p-16 p-10 rounded-[10px] shadow-lg lg:-mt-28">
          <h3 className="text-[32px] leading-10 text-white-main font-normal">
            <span className="text-brand-secondary">100세 시대,</span> 꼼꼼하게
            살펴보는 알뜰재무설계
          </h3>
          <div className="w-full flex lg:flex-row flex-col lg:items-center items-start lg:justify-between justify-start gap-4">
            <p className="text-white-main text-base font-normal lg:w-[40%]">
              재무클리닉 상담매니저는 판매 실적을 우선하지 않으며, 100%
              고객입장에서 서비스에 대해 조언하고 서비스를 제공합니다
            </p>
            <button className="flex items-center justify-center gap-3 bg-white-main text-black-off text-base font-normal rounded-[20px] h-[40px] px-4">
              상세보기
              <FiChevronRight className="text-2xl text-black-off" />
            </button>
          </div>
        </div>
        <NewsTable />
      </div>
    </ComponentWrapper>
  );
};

export default News;
