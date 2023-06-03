import React from "react";
import { StartSection } from "../components/StartSection";
import { AboutIntroduction } from "../components/About/AboutIntroduction";
import { AboutDirectors } from "../components/About/AboutDirectors";

export const About: React.FC = () => {
  return (
    <>
      <AboutIntroduction />
      <AboutDirectors />
      <StartSection />
    </>
  );
};
