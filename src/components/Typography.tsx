import React from "react";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

export const HeadingMainLarge: React.FC<BaseProps> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={`${className} text-[40px] font-bold leading-10 md:text-[64px] md:leading-[56px] xl:text-[100px] xl:leading-[100px]`}
    >
      {children}
    </h1>
  );
};

export const HeadingMainSmall: React.FC<BaseProps> = ({
  children,
  className,
}) => {
  return <h1 className={`${className}`}>{children}</h1>;
};

export const HeadingLarge: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <h2
      className={`${className} text-[32px] font-bold leading-8 xl:text-[48px] xl:leading-[48px]`}
    >
      {children}
    </h2>
  );
};

export const HeadingSmall: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <h3 className={`${className} text-[18px] font-bold leading-7`}>
      {children}
    </h3>
  );
};

export const ParagraphBig: React.FC<BaseProps> = ({ children, className }) => {
  return (
    <p
      className={`${className} text-[15px] font-semibold leading-7 xl:text-[18px]`}
    >
      {children}
    </p>
  );
};

export const ParagraphSmall: React.FC<BaseProps> = ({
  children,
  className,
}) => {
  return (
    <p className={`${className} font-semibold text-[15px] leading-[25px]`}>
      {children}
    </p>
  );
};
