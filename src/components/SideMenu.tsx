import React from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { ParagraphBig } from "./ui/Typography";

type Props = {
  onClose: () => void;
};

const Backdrop: React.FC<Props> = ({ onClose }) => {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-opacity-50 bg-black" />
  );
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const portalElement = document.getElementById("overlays")!;

export const SideMenu: React.FC<Props> = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <div className="bg-dark-blue h-screen w-[65vw] absolute top-0 right-0 overflow-hidden">
          <img
            src="./assets/icon-close.svg"
            alt="icon-close"
            onClick={onClose}
            className="absolute top-[56px] right-[25px] cursor-pointer"
          />
          <div className="flex flex-col gap-[30px] ml-[50px] mt-[150px]">
            <Link to="/" onClick={onClose}>
              <ParagraphBig className="text-[18px] font-semibold">
                home
              </ParagraphBig>
            </Link>
            <Link to="/about" onClick={onClose}>
              <ParagraphBig className="text-[18px] font-semibold">
                about
              </ParagraphBig>
            </Link>
            <Button
              onClick={() => {
                navigate("/contact");
                onClose();
              }}
            >
              contact us
            </Button>
          </div>
          <img
            src="./assets/bg-pattern-about-1-mobile-nav-1.svg"
            alt="pattern"
            className="absolute bottom-0 right-[-100px]"
          />
        </div>,
        portalElement
      )}
    </>
  );
};
