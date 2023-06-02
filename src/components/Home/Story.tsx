import React from "react";
import { HeadingSmall, ParagraphSmall } from "../ui/Typography";

type Props = {
  text: string;
  name: string;
  role: string;
  avatar: string;
};

export const Story: React.FC<Props> = ({ text, name, role, avatar }) => {
  return (
    <div className="relative pt-[36px] mt-[48px] flex flex-col items-center xl:mt-[56px]">
      <img
        src="./assets/icon-quotes.svg"
        alt="icon-quotes"
        className="absolute top-0 left-[50%] -translate-x-2/4"
      />
      <ParagraphSmall className="text-center mx-auto max-w-[327px] relative z-10 md:max-w-[573px] xl:max-w-[350px]">
        {text}
      </ParagraphSmall>
      <HeadingSmall className="text-light-blue mt-[16px] xl:mt-[24px]">
        {name}
      </HeadingSmall>
      <h4 className="text-[13px] italic mt-[2px] mb-[16px] xl:mb-[32px]">
        {role}
      </h4>
      <img
        src={`./assets/${avatar}.jpg`}
        alt="avatar"
        className="w-[62px] h-[62px] rounded-full border-2 border-[#C4FFFE]"
      />
    </div>
  );
};
