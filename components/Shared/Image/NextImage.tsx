import Image from "next/image";
import React from "react";

interface Props {
  imageStyle?: string;
  containerStyle: string;
  imageSrc: string;
}
const NextImage: React.FC<Props> = ({
  imageStyle = "object-cover pointer-events-none",
  containerStyle,
  imageSrc,
}: Props) => {
  return (
    <div className={`relative ${containerStyle}`}>
      <Image
        className={`w-full h-full ${imageStyle}`}
        src={imageSrc}
        alt=""
        fill
      />
    </div>
  );
};

export default NextImage;
