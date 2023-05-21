import React from "react";
import { HeadingSmall, ParagraphSmall } from "../Typography";

type Props = {
  img: string;
  text: string;
  title: string;
};

export const Feature: React.FC<Props> = ({ img, text, title }) => {
  return (
    <div className="md:flex md:gap-[23px]">
      <img
        src={`./assets/${img}.svg`}
        alt="feature-icon"
        className="mx-auto mb-[16px] w-[72px] h-[72px] md:m-0"
      />
      <div>
        <HeadingSmall className="text-center text-orange md:text-left">
          {title}
        </HeadingSmall>
        <ParagraphSmall className="text-center opacity-60 max-w-[327px] mx-auto mt-[8px] mb-[48px] md:text-left md:mt-[16px] md:max-w-[478px] md:mb-[32px]">
          {text}
        </ParagraphSmall>
      </div>
    </div>
  );
};
