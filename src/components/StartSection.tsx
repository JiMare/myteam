import React from "react";
import { HeadingLarge } from "./ui/Typography";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

export const StartSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-orange relative py-[83px] text-center overflow-hidden xl:py-[76px]">
      <div className="md:flex md:justify-center md:items-center md:gap-[84px] xl:gap-[260px]">
        <HeadingLarge className="text-sacramento-green max-w-[320px] text-center mx-auto mb-[24px] md:max-w-[336px] md:mb-0 md:mx-0 xl:max-w-[504px]">
          Ready to get started?
        </HeadingLarge>
        <Button onClick={() => navigate("/contact")} dark>
          contact us
        </Button>
      </div>
      <img
        src="./assets/bg-pattern-home-6-about-5.svg"
        alt="pattern"
        className="absolute bottom-[-20px] left-0 xl:bottom-0"
      />
    </section>
  );
};
