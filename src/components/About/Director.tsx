import React from "react";
import { HeadingSmall } from "../ui/Typography";

export type DirectorType = {
  avatar: string;
  name: string;
  role: string;
};

type Props = {
  director: DirectorType;
};

export const Director: React.FC<Props> = ({ director }) => {
  const { avatar, name, role } = director;
  return (
    <div className="text-center flex flex-col items-center mt-[32px]">
      <img
        src={`./assets/avatar-${avatar}.jpg`}
        alt="avatar"
        className="h-[96px] w-[96px] rounded-full border-2 border-[#C4FFFE]"
      />
      <HeadingSmall className="text-light-blue mt-[16px]">{name}</HeadingSmall>
      <h4 className="text-[13px] italic mt-[2px]">{role}</h4>
    </div>
  );
};
