import React from "react";
import { StartSection } from "../components/StartSection";
import { AboutIntroduction } from "../components/About/AboutIntroduction";
import { AboutDirectors } from "../components/About/AboutDirectors";
import { AboutClients } from "../components/About/AboutClients";

export const About: React.FC = () => {
  return (
    <>
      <AboutIntroduction />
      <AboutDirectors />
      <AboutClients />
      <StartSection />
    </>
  );
};
