import React from "react";

interface Props {
  type?: string;
  name: string;
  state: any;
  setState: () => void;
  placeHolder: string;
}

const TextInput: React.FC<Props> = ({
  type = "text",
  placeHolder,
  name,
  state,
  setState,
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      autoComplete="off"
      name={name}
      value={state}
      onChange={setState}
      required
      className="w-full h-[50px] text-white-main text-base font-medium placeholder:text-white-main placeholder:font-medium  bg-white-main/30 p-4 rounded-[4px] focus:outline-none"
    />
  );
};

export default TextInput;
