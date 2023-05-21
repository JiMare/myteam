import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  secondary?: boolean;
  dark?: boolean;
};

export const Button: React.FC<Props> = ({
  onClick,
  secondary = false,
  dark = false,
  children,
}) => {
  const borderColor = dark ? "sacramento-green" : "white";
  const textColor = secondary || dark ? "sacramento-green" : "white";
  const bgColor = secondary ? "white" : "inherit";

  const hoverTextColor = dark ? "white" : "sacramento-green";
  const hoverColor = secondary
    ? "light-blue"
    : dark
    ? "sacramento-green"
    : "white";

  return (
    <button
      onClick={onClick}
      className={`h-[48px] border-2 rounded-3xl border-${borderColor} text-${textColor} w-[153px] font-semibold text-[18px] bg-${bgColor} hover:text-${hoverTextColor} hover:bg-${hoverColor} hover:border-${hoverColor}`}
    >
      {children}
    </button>
  );
};
