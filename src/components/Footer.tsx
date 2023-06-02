import React from "react";
import { Link } from "react-router-dom";
import { ParagraphSmall } from "./ui/Typography";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-green px-[24px] pt-[66px] pb-[64px] text-center md:px-[40px] md:py-[56px] md:relative xl:px-[165px] xl:py-[48px] xl:h-[196px]">
      <img
        src="./assets/logo.svg"
        alt="logo-mnyteam"
        className="h-[24px] mx-auto mb-[24px] md:absolute xl:h-[40px]"
      />
      <div className="flex justify-center gap-[24px] mb-[24px] md:absolute md:top-[133px] xl:top-[113px] xl:gap-[40px]">
        <Link to="/" className="z-10">
          <ParagraphSmall>home</ParagraphSmall>
        </Link>
        <Link to="/about" className="z-10">
          <ParagraphSmall>about</ParagraphSmall>
        </Link>
      </div>
      <div className="opacity-60 mb-[40px] md:text-right xl:text-left xl:ml-[285px]">
        <ParagraphSmall>987 Hillcrest Lane</ParagraphSmall>
        <ParagraphSmall>Irvine, CA</ParagraphSmall>
        <ParagraphSmall>California 92714</ParagraphSmall>
        <ParagraphSmall>Call Us : 949-833-7432</ParagraphSmall>
      </div>
      <div className="flex justify-center gap-[16px] mb-[16px] md:absolute xl:top-[48px] xl:right-[165px]">
        <img src="./assets/icon-facebook.svg" alt="facebook-icon" />
        <img src="./assets/icon-pinterest.svg" alt="pinterest-icon" />
        <img src="./assets/icon-twitter.svg" alt="tiwtter-icon" />
      </div>
      <ParagraphSmall className="opacity-60 md:text-right xl:absolute xl:top-[123px] xl:right-[165px]">
        Copyright 2020. All Rights Reserved
      </ParagraphSmall>
    </footer>
  );
};
