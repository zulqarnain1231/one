import React from "react";
interface Props {
  title: string;
  detail: string;
  background: string;
}
const HeroSlide: React.FC<Props> = ({ title, detail, background }: Props) => {
  return (
    <div
      className={`lg:px-10 px-4 w-full sm:h-[calc(100vh-100px)] h-[600px] flex lg:flex-row flex-col items-center lg:justify-between justify-start  ${background} bg-cover bg-no-repeat bg-center`}
    >
      <h1 className="text-white-main sm:text-6xl text-4xl lg:text-right text-center font-medium lg:w-[40%] w-full mt-20 lg:mt-0">
        {title}
      </h1>
      <div className="h-full flex flex-col items-end justify-center gap-4">
        <div className="flex items-center justify-end">
          <div className="w-[100px] lg:h-[200px] h-[100px] border-t-2 border-t-brand-main"></div>
        </div>
        <p className="text-white-off text-base text-center font-medium">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default HeroSlide;
