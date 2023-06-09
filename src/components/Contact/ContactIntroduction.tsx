import React from "react";
import { HeadingLarge, HeadingMainLarge } from "../ui/Typography";
import { Topic } from "./Topic";

const topics = [
  { icon: "person", text: "The quality of our talent network" },
  { icon: "cog", text: "Usage & implementation of our software" },
  { icon: "chart", text: "How we help drive innovation" },
];

export const ContactIntroduction: React.FC = () => {
  return (
    <section className="bg-green px-[24px] pb-[56px] md:relative md:overflow-hidden md:pb-[64px] xl:shrink-0 xl:px-0 xl:pb-[120px] xl:w-[556px]">
      <img
        src="./assets/bg-pattern-about-2-contact-1.svg"
        alt="pattern"
        className="hidden md:block md:absolute md:left-[-100px] xl:hidden"
      />
      <HeadingMainLarge className="text-center xl:text-[64px] xl:text-left">
        Contact
      </HeadingMainLarge>
      <HeadingLarge className="text-orange text-center mt-[16px] md:mt-[24px] xl:text-[32px] xl:text-left xl:mt-[16px]">
        Ask us about
      </HeadingLarge>
      <div className="mt-[40px] flex flex-col gap-[32px] items-center md:items-start md:w-[515px] md:mx-auto md:mt-[24px] xl:mt-[32px] xl:ml-0 xl:gap-[8px]">
        {topics.map((topic) => (
          <Topic key={topic.icon} icon={topic.icon} text={topic.text} />
        ))}
      </div>
    </section>
  );
};
