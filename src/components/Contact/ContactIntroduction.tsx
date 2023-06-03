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
    <section className="bg-green px-[24px] pb-[56px]">
      <HeadingMainLarge className="text-center">Contact</HeadingMainLarge>
      <HeadingLarge className="text-orange text-center mt-[16px]">
        Ask us about
      </HeadingLarge>
      <div className="mt-[40px] flex flex-col gap-[32px] items-center">
        {topics.map((topic) => (
          <Topic key={topic.icon} icon={topic.icon} text={topic.text} />
        ))}
      </div>
    </section>
  );
};
