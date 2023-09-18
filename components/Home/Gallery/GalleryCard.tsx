import React from "react";
import NextImage from "@/components/Shared/Image/NextImage";

interface Props {
  image: string;
  title: string;
  detail: string;
}

const GalleryCard: React.FC<Props> = ({ image, title, detail }) => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-6">
      <NextImage
        imageSrc={image}
        imageStyle="object-cover rounded-md"
        containerStyle="h-[275px] w-full rounded-md"
      />
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <p className="text-center text-black-off text-xl font-normal">
          {title}
        </p>
        <p className="text-center text-black-off text-base font-normal">
          {detail}
        </p>
      </div>
      <span className="bg-white-off py-2 px-3 rounded cursor-pointer text-black-off text-base font-normal">
        자세히 보기
      </span>
    </div>
  );
};

export default GalleryCard;
