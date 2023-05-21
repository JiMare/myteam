import React from "react";
import { Feature } from "./Feature";
import { HeadingLarge } from "../Typography";

const featuresData = [
  {
    title: "Experienced Individuals",
    text: "Our network is made up of highly experienced professionals who are passionate about what they do.",
    img: "icon-person",
  },
  {
    title: "Easy to Implement",
    text: "Our processes have been refined over years of implementation meaning our teams always deliver.",
    img: "icon-cog",
  },
  {
    title: "Enhanced Productivity",
    text: "Our customized platform with in-built analytics helps you manage your distributed teams.",
    img: "icon-chart",
  },
];

export const HomeFeatures: React.FC = () => {
  return (
    <section className="bg-sacramento-green px-[24px] pt-[64px] pb-[16px] relative overflow-hidden md:pt-[100px] md:pb-[68px] md:px-[98px] xl:px-[165px] xl:pt-[140px] xl:pb-[108px]">
      <img
        src="./assets/bg-pattern-home-3.svg"
        alt="pattern"
        className="absolute top-0 right-[-100px]"
      />
      <div className="xl:flex xl:gap-[125px]">
        <HeadingLarge className="pt-[32px] xl:pt-[54px] max-w-[240px] relative after:w-[50px] after:h-[4px] after:bg-orange after:absolute after:top-0 after:left-0 mb-[56px] md:mb-[64px] md:max-w-[445px]">
          Build & manage distributed teams like no one else.
        </HeadingLarge>
        <div className="xl:pt-[54px]">
          {featuresData.map((feature) => (
            <Feature
              img={feature.img}
              text={feature.text}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
