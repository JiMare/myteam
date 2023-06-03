import React from "react";
import { HeadingLarge, HeadingSmall, ParagraphSmall } from "../ui/Typography";
import { Card } from "../ui/Card";
import { Director, DirectorType } from "./Director";

const directors: DirectorType[] = [
  {
    avatar: "nikita",
    name: "Nikita Marks",
    role: "Founder & CEO",
  },
  {
    avatar: "christian",
    name: "Christian Duncan",
    role: "Co-founder & COO",
  },
  {
    avatar: "cruz",
    name: "Cruz Hamer",
    role: "Co-founder & CTO",
  },
  {
    avatar: "drake",
    name: "Drake Heaton",
    role: "Business Development Lead",
  },
];

const aden: DirectorType = {
  avatar: "aden",
  name: "Aden Allan",
  role: "Head of Talent",
};

const griffin: DirectorType = {
  avatar: "griffin",
  name: "Griffin Wise",
  role: "Lead Marketing",
};

export const AboutDirectors: React.FC = () => {
  return (
    <section className="bg-jungle-green pt-[88px] pb-[116px] px-[24px] relative overflow-hidden">
      <img
        src="./assets/bg-pattern-about-2-contact-1.svg"
        alt="pattern"
        className="absolute top-[-100px] left-[-100px]"
      />
      <HeadingLarge className="text-center">Meet the directors</HeadingLarge>
      <div className="flex flex-col gap-[52px] items-center pt-[48px]">
        {directors.map((director) => (
          <Card>
            <Director key={director.avatar} director={director} />
          </Card>
        ))}
        <Card>
          <Director director={griffin} />
        </Card>
        <Card avatar={false}>
          <div className="text-center pt-[35px]">
            <HeadingSmall className="text-light-blue">Aden Allan</HeadingSmall>
            <ParagraphSmall className="mt-[8px] max-w-[235px] mx-auto">
              “Empowered teams create truly amazing products. Set the north star
              and let them follow it.”
            </ParagraphSmall>
            <div className="flex gap-[16px] justify-center mt-[24px]">
              <img src="./assets/icon-twitter.svg" alt="tiwtter-icon" />
              <img src="./assets/icon-linkedin.svg" alt="linekdin-icon" />
            </div>
          </div>
        </Card>
      </div>
      <img
        src="./assets/bg-pattern-home-4-about-3.svg"
        alt="pattern"
        className="absolute right-0 bottom-0"
      />
    </section>
  );
};
