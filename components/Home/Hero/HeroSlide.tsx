import React from "react";
interface Props {
  title: string;
  detail: string;
  background: string;
}
const HeroSlide: React.FC<Props> = ({ title, detail, background }: Props) => {
  return (
    <div
      className={`lg:px-10 px-4 w-full h-full flex items-center justify-between  ${background} bg-cover bg-no-repeat bg-center`}
    >
      <h1 className="text-white-main text-6xl font-medium w-[60%]">{title}</h1>
      <div className="h-full flex flex-col items-end justify-center gap-4">
        <div className="flex items-center justify-end">
          <div className="w-[100px] h-[200px] border-t-2 border-t-brand-main"></div>
        </div>
        <p className="text-white-off text-base font-medium">{detail}</p>
      </div>
    </div>
  );
};

export default HeroSlide;
