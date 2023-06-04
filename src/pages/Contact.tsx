import React from "react";
import { ContactIntroduction } from "../components/Contact/ContactIntroduction";
import { ContactForm } from "../components/Contact/ContactForm";

export const Contact: React.FC = () => {
  return (
    <div className="xl:bg-green xl:relative xl:overflow-hidden xl:px-[165px]">
      <img
        src="./assets/bg-pattern-about-2-contact-1.svg"
        alt="pattern"
        className="hidden xl:block xl:absolute xl:left-[-100px]"
      />
      <div className="xl:flex xl:min-w-[1112px] xl:mx-auto xl:justify-between">
        <ContactIntroduction />
        <ContactForm />
      </div>
      <img
        src="./assets/bg-pattern-contact-2.svg"
        alt="pattern"
        className="hidden xl:block xl:absolute xl:right-[-100px] xl:bottom-0"
      />
    </div>
  );
};
