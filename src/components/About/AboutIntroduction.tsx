import React from "react";
import { HeadingMainLarge, ParagraphBig } from "../ui/Typography";

export const AboutIntroduction: React.FC = () => {
  return (
    <section className="bg-green relative px-[24px] pb-[108px] overflow-hidden xl:px-[165px] xl:pb-[120px]">
      <div className="xl:flex xl:justify-between">
        <HeadingMainLarge className="text-center mb-[16px] md:mb-[24px] xl:text-[64px]">
          About
        </HeadingMainLarge>
        <ParagraphBig className="text-center max-w-[327px] mx-auto md:max-w-[457px] xl:max-w-[730px] xl:mx-0 xl:text-left xl:relative xl:pt-[40px] xl:after:content-[''] xl:after:h-[4px] xl:after:w-[50px] xl:after:absolute xl:after:bg-orange xl:after:top-0 xl:after:left-0">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </ParagraphBig>
      </div>
      <img
        src="./assets/bg-pattern-about-1-mobile-nav-1.svg"
        alt="pattern"
        className="absolute bottom-[-100px] right-[-100px] md:bottom-0"
      />
    </section>
  );
};
