import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import NextImage from "@/components/Shared/Image/NextImage";
import ConsultationHistory from "./ConsultationHistory";
import AppointmentForm from "./AppointmentForm";
import Services from "./Services";

const Consultation = () => {
  return (
    <ComponentWrapper
      id="consultation"
      style="w-full bg-white-main lg:py-16 py-10 relative
  "
    >
      <div className="w-full h-full flex flex-col items-center justify-start gap-10 ">
        <div className="w-full grid lg:grid-cols-[1fr,2fr] gap-6">
          <AppointmentForm />
          {/* right side */}
          <div className="w-full grid lg:grid-cols-[.5fr,2fr] md:grid-cols-[1fr,2fr] gap-3">
            <div className="h-full flex flex-col items-center justify-start gap-4">
              <NextImage
                imageSrc="/Assets/Consultation/Pencil.png"
                imageStyle="object-fill"
                containerStyle="h-[96px] w-[96px]"
              />
              <div className="flex flex-col items-center justify-start gap-1">
                <p className="text-[28px] leading-9 text-black-off font-medium">
                  실시간
                </p>
                <p className="text-[28px] leading-9 text-brand-main font-medium">
                  상담현황
                </p>
              </div>
            </div>
            {/* table here */}
            <ConsultationHistory />
          </div>
        </div>
        <Services />
        <div className="w-full lg:w-auto flex lg:flex-col items-center lg:justify-start justify-center gap-3 lg:absolute lg:right-5 lg:top-[20%]">
          <NextImage
            imageSrc="/Assets/Consultation/Play.png"
            containerStyle="h-[50px] w-[50px] cursor-pointer"
            imageStyle="object-contain"
          />
          <NextImage
            imageSrc="/Assets/Consultation/Messege.png"
            containerStyle="h-[50px] w-[50px] cursor-pointer"
            imageStyle="object-contain"
          />
          <NextImage
            imageSrc="/Assets/Consultation/Modoo.png"
            containerStyle="h-[50px] w-[50px] cursor-pointer"
            imageStyle="object-contain"
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Consultation;
