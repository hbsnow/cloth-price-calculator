import React, {
  ComponentPropsWithoutRef,
  FocusEventHandler,
  forwardRef,
} from "react";

import { classnames } from "tailwindcss-classnames";

export type Props = Readonly<
  {
    label: string;
    errorMessage?: string;
  } & Omit<ComponentPropsWithoutRef<"input">, "className" | "onFocus">
>;

export const Input = forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { label, errorMessage, ...rest } = props;

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      e.target.select();
    };

    return (
      <div>
        <label>
          <span
            className={classnames(
              "p-1",
              "text-gray-500",
              "text-sm",
              "font-semibold"
            )}
          >
            {label}
          </span>
          <input
            ref={ref}
            className={classnames(
              "block",
              "w-full",
              "rounded-md",
              "shadow-sm",
              "focus:ring-opacity-50",
              "focus:ring",
              {
                ["border-gray-300"]: !errorMessage,
                ["border-red-500"]: !!errorMessage,
                ["focus:border-pink-300"]: !errorMessage,
                ["focus:border-red-500"]: !!errorMessage,
                ["focus:ring-pink-200"]: !errorMessage,
                ["focus:ring-red-500"]: !!errorMessage,
              }
            )}
            onFocus={handleFocus}
            {...rest}
          />
        </label>
        {errorMessage && (
          <div className={classnames("text-red-600", "text-sm")}>
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "InputComponent";
