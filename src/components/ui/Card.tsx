import React from "react";
import classnames from "classnames";

type Props = {
  avatar?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<Props> = ({
  avatar = true,
  children,
  className,
}) => {
  const icon = avatar ? "cross" : "close-dark";
  return (
    <div
      className={classnames(
        `${className} h-[253px] w-[327px] max-w-[100%] bg-dark-green relative md:w-[281px] xl:w-[350px]`,
        {
          "bg-sacramento-green": avatar,
        }
      )}
    >
      {children}
      <div
        className={classnames(
          `h-[56px] w-[56px] bg-light-blue rounded-full flex justify-center items-center absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 cursor-pointer`,
          {
            "bg-orange hover:bg-light-blue": avatar,
            "hover:bg-orange": avatar === false,
          }
        )}
      >
        <img src={`./assets/icon-${icon}.svg`} alt="icon" />
      </div>
    </div>
  );
};
