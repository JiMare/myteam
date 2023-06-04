import React, { useState, forwardRef } from "react";
import classnames from "classnames";
import { FieldError } from "react-hook-form";

type Props = {
  id: string;
  label: string;
  error?: FieldError;
  value: string;
};

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, error, id, value, ...props }, ref) => {
    const [isLabelVisible, setIsLabelVisible] = useState(true);
    return (
      <div className="w-full relative mb-[24px]">
        {isLabelVisible && (
          <label
            htmlFor={id}
            className={classnames(
              `absolute left-[14px] font-semibold text-[15px] opacity-60`,
              {
                "text-orange": error,
              }
            )}
          >
            {label}
          </label>
        )}
        <input
          type="text"
          id={id}
          onFocus={() => setIsLabelVisible(false)}
          className={classnames(
            `bg-green outline-none block pb-[16px] pl-[14px] border-b border-b-1 border-solid border-white w-full focus:border-light-blue`,
            { "border-orange": error }
          )}
          ref={ref}
          {...props}
          onBlur={() => {
            if (!value) {
              setIsLabelVisible(true);
            }
          }}
        />
        {error && (
          <p className="text-orange text-[10px] ml-[8px] mt-[6px] font-bold">
            {error.message}
          </p>
        )}
      </div>
    );
  }
);
