"use client";
import TextInput from "@/components/Shared/Inputs/TextInput";
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

const AppointmentForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    contact: "",
    email: "",
    category: "",
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-start justify-start gap-6 bg-brand-main rounded-[10px] px-6 pt-16 pb-28 lg:-mt-40 shadow-xl"
    >
      <div className="w-full flex items-center justify-start gap-3">
        <HiOutlineMail className="text-white-main text-[28px]" />
        <p className="text-white-main text-2xl font-medium">
          알뜰서비스 상담신청
        </p>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-3">
        <TextInput
          state={inputs.name}
          name="name"
          setState={handleInputs}
          placeHolder="이름"
        />
        <TextInput
          state={inputs.contact}
          name="contact"
          type="tel"
          setState={handleInputs}
          placeHolder="연락처"
        />
        <TextInput
          state={inputs.email}
          name="email"
          type="email"
          setState={handleInputs}
          placeHolder=" 이메일"
        />
        <TextInput
          state={inputs.category}
          name="category"
          setState={handleInputs}
          placeHolder="카테고리 선택"
        />
        <div className="w-full flex items-center justify-start gap-2">
          <input type="checkbox" name="" id="" />
          <p className="text-white-main text-base font-medium">
            {" "}
            개인정보 수집/활동동의
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="w-full h-[48px] flex items-center justify-center text-black-off text-base font-medium bg-white-main rounded"
      >
        보내기
      </button>
    </form>
  );
};

export default AppointmentForm;
