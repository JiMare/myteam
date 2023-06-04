import React from "react";
import classnames from "classnames";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  dark?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  small?: boolean;
};

export const Button: React.FC<Props> = ({
  onClick,
  secondary = false,
  dark = false,
  children,
  className,
  small = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classnames(
        `${className} h-[48px] border-2 rounded-3xl font-semibold text-[18px] w-[153px]`,
        {
          "border-sacramento-green text-sacramento-green bg-inherit hover:text-white hover:bg-sacramento-green":
            dark,
          "border-white text-sacramento-green bg-white hover:bg-light-blue hover:border-light-blue ":
            secondary,
          "border-white text-white bg-inherit hover:text-sacramento-green hover:bg-white":
            !dark && !secondary,
          "w-[123px]": small,
        }
      )}
    >
      {children}
    </button>
  );
};
