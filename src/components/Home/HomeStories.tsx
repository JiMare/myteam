import React from "react";

//TODO špatne styly u nadpisu zkopirovane - dodelat

export const HomeStories: React.FC = () => {
  return (
    <section className="bg-green">
      <h2 className="text-center text-[32px] font-bold pt-[32px] max-w-[240px] leading-8 mb-[56px] md:max-w-[445px]">
        Delivering real results for top companies. Some of our{" "}
        <span className="text-light-blue">success stories.</span>
      </h2>
    </section>
  );
};
