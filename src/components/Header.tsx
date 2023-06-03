import React, { useState } from "react";
import { SideMenu } from "./SideMenu";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { ParagraphBig } from "./ui/Typography";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-green px-[24px] md:px-[39px] xl:px-[165px] flex justify-between items-center pt-[48px] pb-[80px] md:pb-[112px] xl:pb-[120px]">
      <div className="md:flex md:gap-[48px] xl:gap-[80px]">
        <img src="./assets/logo.svg" alt="logo-mnyteam" className="h-[32px]" />

        <div className="hidden md:flex md:gap-[40px] md:items-center">
          <Link to="/">
            <ParagraphBig>home</ParagraphBig>
          </Link>
          <Link to="/about">
            <ParagraphBig>about</ParagraphBig>
          </Link>
        </div>
      </div>
      <Button onClick={() => navigate("/contact")} className="hidden md:block">
        contact us
      </Button>

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
