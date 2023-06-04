import React from "react";
import { HeadingSmall } from "../ui/Typography";

type Props = { icon: string; text: string };

export const Topic: React.FC<Props> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-[23px]">
      <img src={`./assets/icon-${icon}.svg`} alt="topic-icon" className="" />
      <HeadingSmall className="max-w-[232px] md:max-w-[100%]">{text}</HeadingSmall>
    </div>
  );
};
