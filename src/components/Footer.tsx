import React from "react";
import { Link } from "react-router-dom";
import { ParagraphSmall } from "./ui/Typography";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-green px-[24px] pt-[66px] pb-[64px] text-center">
      <img
        src="./assets/logo.svg"
        alt="logo-mnyteam"
        className="h-[24px] mx-auto mb-[24px]"
      />
      <div className="flex justify-center gap-[24px] mb-[24px]">
        <Link to="/">
          <ParagraphSmall>home</ParagraphSmall>
        </Link>
        <Link to="/about">
          <ParagraphSmall>about</ParagraphSmall>
        </Link>
      </div>
      <div className="opacity-60 mb-[40px]">
        <ParagraphSmall>987 Hillcrest Lane</ParagraphSmall>
        <ParagraphSmall>Irvine, CA</ParagraphSmall>
        <ParagraphSmall>California 92714</ParagraphSmall>
        <ParagraphSmall>Call Us : 949-833-7432</ParagraphSmall>
      </div>
      <div className="flex justify-center gap-[16px] mb-[16px]">
        <img src="./assets/icon-facebook.svg" alt="facebook-icon" />
        <img src="./assets/icon-pinterest.svg" alt="pinterest-icon" />
        <img src="./assets/icon-twitter.svg" alt="tiwtter-icon" />
      </div>
      <ParagraphSmall className="opacity-60">Copyright 2020. All Rights Reserved</ParagraphSmall>
    </footer>
  );
};
