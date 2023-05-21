import React, { useState } from "react";
import { SideMenu } from "./SideMenu";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-green px-[24px] md:px-[39px] xl:px-[165px] flex justify-between items-center pt-[48px] pb-[80px] md:pb-[112px] xl:pb-[129px]">
      <img src="./assets/logo.svg" alt="logo-mnyteam" className="h-[32px]" />
      <img
        src="./assets/icon-hamburger.svg"
        alt="icon-hamburger"
        className="w-[20px] h-[17px] cursor-pointer md:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
      />
      {isMobileMenuOpen && (
        <SideMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
};
