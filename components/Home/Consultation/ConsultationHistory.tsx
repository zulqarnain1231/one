import React from "react";

const ConsultationHistory = () => {
  const consultations = [
    {
      status: "신청완료",
      detail: "구매상담 상담신청 - 김재*님",
      date: "2023-07-25",
    },
    {
      status: "신청완료",
      detail: "제품문의 상담신청 - 최순*님",
      date: "2023-07-17",
    },
    {
      status: "신청완료",
      detail: "서비스문의 상담신청 - 민호*님",
      date: "2023-07-12",
    },
    {
      status: "신청완료",
      detail: "제품문의 상담신청 - 김민*님",
      date: "2023-07-12",
    },
    {
      status: "신청완료",
      detail: "제품문의 상담신청 - 박정*님",
      date: "2023-07-12",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-start">
      {consultations.map((item: any, index: number) => (
        <div
          key={index}
          className={`w-full grid xl:grid-cols-[.5fr,1fr,1.5fr] lg:grid-cols-[.5fr,1fr,1fr] grid-cols-3 gap-2 py-3 border-b-2 ${
            index == 0 && "border-t-2 border-t-white-off"
          } border-b-white-off`}
        >
          <span className="bg-white-off sm:p-2 p-1 rounded flex items-center justify-center">
            <p className="text-black-off text-sm font-normal">{item.status}</p>
          </span>
          <div className="w-full flex items-center justify-center">
            <p className="text-black-off text-[15px] leading-6 font-medium">
              {item.detail}
            </p>
          </div>
          <div className="w-full flex items-center justify-end">
            <p className="text-sm text-black-off font-normal">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsultationHistory;
