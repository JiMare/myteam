import React from "react";
import { HeadingLarge } from "../ui/Typography";

export const AboutClients: React.FC = () => {
  return (
    <section className="bg-sacramento-green px-[24px] py-[88px] relative overflow-hidden md:py-[100px] md:px-[40px] xl:py-[140px]">
      <img
        src="./assets/bg-pattern-about-4.svg"
        alt="pattern"
        className="absolute top-[-100px] left-[-100px] md:left-0 xl:top-0"
      />
      <HeadingLarge className="text-center">Some of our clients</HeadingLarge>
      <div className="flex flex-col w-[162px] mx-auto mt-[64px] gap-[72px] items-center md:flex-row md:h-[28px] md:mt-[48px] md:w-[689px] md:text-center xl:mt-[64px] xl:w-[1110px] xl:h-[45px]">
        <img
          src="./assets/logo-the-verge.png"
          alt="logo"
          className="md:w-[80px] xl:w-[164px]"
        />
        <img
          src="./assets/logo-jakarta-post.png"
          alt="logo"
          className="md:w-[80px] xl:w-[164px]"
        />
        <img
          src="./assets/logo-the-guardian.png"
          alt="logo"
          className="md:w-[80px] xl:w-[164px]"
        />
        <img
          src="./assets/logo-tech-radar.png"
          alt="logo"
          className="md:w-[80px] xl:w-[164px]"
        />
        <img
          src="./assets/logo-gadgets-now.png"
          alt="logo"
          className="w-[106px] md:w-[60px] md:h-[28px] xl:w-[164px] xl:h-[48px]"
        />
      </div>
    </section>
  );
};
