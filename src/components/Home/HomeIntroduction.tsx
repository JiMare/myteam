import React from "react";
import { HeadingMainLarge, ParagraphBig } from "../ui/Typography";

export const HomeIntroduction: React.FC = () => {
  return (
    <section className="bg-green">
      <div className="px-[24px] mb-[97px] md:mb-[156px] xl:flex xl:items-end xl:justify-between xl:px-[165px]">
        <img
          src="./assets/bg-pattern-home-1.svg"
          alt="pattern"
          className="hidden xl:block xl:absolute xl:-left-[100px]"
        />
        <HeadingMainLarge className="text-center w-[240px] mx-auto mb-[18px] md:w-[350px] md:mb-[24px] xl:text-left xl:w-[550px] xl:mb-0 xl:mx-0">
          Find the best <span className="text-orange">talent</span>
        </HeadingMainLarge>
        <ParagraphBig className="text-center max-w-[327px] mx-auto md:w-[457px] xl:relative xl:text-left xl:max-w-[430px] xl:mx-0 xl:pt-[80px] xl:after:content-[''] xl:after:h-[4px] xl:after:w-[50px] xl:after:absolute xl:after:bg-light-blue xl:after:top-0 xl:after:left-0">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </ParagraphBig>
      </div>
      <img
        src="./assets/bg-pattern-home-2.svg"
        alt="pattern"
        className="mx-auto xl:ml-auto xl:mx-0 px-[8px] xl:px-[165px]"
      />
    </section>
  );
};
