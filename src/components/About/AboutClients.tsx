import React from "react";
import { HeadingLarge } from "../ui/Typography";

export const AboutClients: React.FC = () => {
  return (
    <section className="bg-sacramento-green px-[24px] py-[88px] relative overflow-hidden">
        <img src="./assets/bg-pattern-about-4.svg" alt="pattern" className="absolute top-[-100px] left-[-100px]"/>
      <HeadingLarge className="text-center">Some of our clients</HeadingLarge>
      <div className="flex flex-col w-[162px] mx-auto mt-[64px] gap-[72px] items-center">
        <img src="./assets/logo-the-verge.png" alt="logo" />
        <img src="./assets/logo-jakarta-post.png" alt="logo" />
        <img src="./assets/logo-the-guardian.png" alt="logo" />
        <img src="./assets/logo-tech-radar.png" alt="logo" />
        <img
          src="./assets/logo-gadgets-now.png"
          alt="logo"
          className="w-[106px]"
        />
      </div>
    </section>
  );
};
