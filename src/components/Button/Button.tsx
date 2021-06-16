import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export type Props = Readonly<
  PropsWithChildren<Omit<ComponentPropsWithoutRef<"button">, "className">>
>;

export const Button = (props: Props): JSX.Element => {
  const { children, ...rest } = props;

  return (
    <button className={""} {...rest}>
      {children}
    </button>
  );
};
