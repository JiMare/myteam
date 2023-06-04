import React from "react";
import { ContactIntroduction } from "../components/Contact/ContactIntroduction";
import { ContactForm } from "../components/Contact/ContactForm";

export const Contact: React.FC = () => {
  return (
    <div>
      <ContactIntroduction />
      <ContactForm />
    </div>
  );
};
