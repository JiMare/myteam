import React from "react";
import { StartSection } from "../components/StartSection";
import { AboutIntroduction } from "../components/About/AboutIntroduction";

export const About: React.FC = () => {
  return (
    <>
      <AboutIntroduction />
      <StartSection />
    </>
  );
};
