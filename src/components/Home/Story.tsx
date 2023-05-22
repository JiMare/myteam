import React from "react";
import { HeadingSmall, ParagraphSmall } from "../Typography";

type Props = {
  text: string;
  name: string;
  role: string;
  avatar: string;
};

export const Story: React.FC<Props> = ({ text, name, role, avatar }) => {
  return (
    <div className="relative pt-[36px] mt-[48px] flex flex-col items-center">
      <img
        src="./assets/icon-quotes.svg"
        alt="icon-quotes"
        className="absolute top-0 left-[50%] -translate-x-2/4"
      />
      <ParagraphSmall className="text-center mx-auto max-w-[327px] relative z-10">
        {text}
      </ParagraphSmall>
      <HeadingSmall className="text-light-blue mt-[16px]">{name}</HeadingSmall>
      <h4>{role}</h4>
      <img
        src={`./assets/${avatar}.jpg`}
        alt="avatar"
        className="w-[62px] h-[62px] rounded-full"
      />
    </div>
  );
};
