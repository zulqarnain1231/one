import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import { HiOutlineMail } from "react-icons/hi";

const Consultation = () => {
  return (
    <ComponentWrapper
      id="consultation"
      style="w-full bg-white-main lg:py-16 py-10 relative
  "
    >
      <div className="w-full h-full flex flex-col items-center justify-start gap-10 ">
        <div className="w-full grid grid-cols-[1fr,1.5fr] gap-8">
          <form className="w-full flex flex-col items-start justify-start gap-4 bg-brand-main rounded-[10px] px-4 py-10 -mt-20">
            <div className="w-full flex items-center justify-start gap-3">
              <HiOutlineMail className="text-white-main text-[28px]" />
              <p className="text-white-main text-2xl font-medium">
                알뜰서비스 상담신청
              </p>
            </div>
            <input
              type="text"
              placeholder="이름"
              className="w-full h-[50px] text-white-main text-base font-medium placeholder:text-white-main placeholder:font-medium  bg-white-main/30 p-4 rounded-[4px] focus:outline-none"
            />
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Consultation;
