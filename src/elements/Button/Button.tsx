import React, {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useMemo,
} from "react";

import { classnames, TArg } from "tailwindcss-classnames";

export type Props = Readonly<
  {
    color: "primary" | "secondary";
  } & PropsWithChildren<Omit<ComponentPropsWithoutRef<"button">, "className">>
>;

export const Button = (props: Props): JSX.Element => {
  const { color, children, ...rest } = props;

  const classes = useMemo<TArg[]>(() => {
    if (props.disabled) {
      return ["bg-pink-400", "text-white", "opacity-50"];
    }

    switch (color) {
      case "primary": {
        return [
          "bg-pink-400",
          "text-white",
          "focus:ring-pink-200",
          "hover:bg-pink-600",
        ];
      }
      case "secondary": {
        return [
          "bg-white",
          "text-pink-400",
          "focus:ring-pink-200",
          "hover:bg-pink-50",
        ];
      }
    }
  }, [color, props.disabled]);

  return (
    <button
      className={classnames(
        "px-6",
        "py-2",
        "rounded-full",
        "focus:outline-none",
        "focus:ring-4",
        ...classes
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
