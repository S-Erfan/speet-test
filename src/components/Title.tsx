import React, { FC } from "react";

interface IProps {
  text: string;
}

const Title: FC<IProps> = ({ text }) => {
  return (
    <h1 className="w-full text-center pt-[34px] text-3xl lg:pt-[78px] text-[#9B9B9B] font-bold sm:text-4xl lg:text-6xl  ">
      {text}
    </h1>
  );
};

export default Title;
