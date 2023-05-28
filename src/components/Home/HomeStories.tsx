import React from "react";
import { HeadingLarge } from "../Typography";
import { Story } from "./Story";

const storiesData = [
  {
    text: "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    name: "Kady Baker",
    role: "Product Manager at Bookmark",
    avatar: "avatar-kady",
  },
  {
    text: "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    name: "Aiysha Reese",
    role: "Founder of Manage",
    avatar: "avatar-aiysha",
  },
  {
    text: "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    name: "Arthur Clarke",
    role: "Co-founder of MyPhysio",
    avatar: "avatar-arthur",
  },
];

export const HomeStories: React.FC = () => {
  return (
    <section className="bg-green pt-[140px] px-[24px] relative">
      <img
        src="./assets/bg-pattern-home-4-about-3.svg"
        alt="pattern"
        className="absolute top-0 left-0"
      />
      <HeadingLarge className="text-center max-w-[327px] mx-auto">
        Delivering real results for top companies. Some of our{" "}
        <span className="text-light-blue">success stories.</span>
      </HeadingLarge>
      <div className="pb-[164px]">
        {storiesData.map((story) => (
          <Story
            key={story.avatar}
            name={story.name}
            text={story.text}
            role={story.role}
            avatar={story.avatar}
          />
        ))}
      </div>
      <img src="./assets/bg-pattern-home-5.svg" alt="pattern" className="absolute bottom-0 right-0"/>
    </section>
  );
};
