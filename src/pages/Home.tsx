import React from "react";
import { HomeIntroduction } from "../components/Home/HomeIntroduction";
import { HomeFeatures } from "../components/Home/HomeFeatures";
import { HomeStories } from "../components/Home/HomeStories";

export const Home: React.FC = () => {
  return (
    <>
      <HomeIntroduction />
      <HomeFeatures />
      <HomeStories />
    </>
  );
};
