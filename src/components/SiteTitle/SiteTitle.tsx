import React from "react";

import { classnames, TArg } from "tailwindcss-classnames";

export const SiteTitle = (): JSX.Element => {
  return (
    <h1>
      <span
        className={classnames(
          "text-transparent",
          "font-title" as TArg,
          "text-xl",
          "text-pink-400",
          "md:text-3xl"
        )}
      >
        Cloth Price Calculator
      </span>
    </h1>
  );
};
