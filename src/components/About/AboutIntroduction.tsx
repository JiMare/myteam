import React from "react";
import { HeadingMainLarge, ParagraphBig } from "../ui/Typography";

export const AboutIntroduction: React.FC = () => {
  return (
    <section className="bg-green relative px-[24px] pb-[108px] overflow-hidden">
      <HeadingMainLarge className="text-center mb-[16px]">
        About
      </HeadingMainLarge>
      <ParagraphBig className="text-center max-w-[327px] mx-auto">
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We’ll bring those teams to you.
      </ParagraphBig>
      <img
        src="./assets/bg-pattern-about-1-mobile-nav-1.svg"
        alt="pattern"
        className="absolute bottom-[-100px] right-[-100px]"
      />
    </section>
  );
};
