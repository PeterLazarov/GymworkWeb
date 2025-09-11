import React, { ComponentPropsWithoutRef } from "react";

type HeaderProps = ComponentPropsWithoutRef<"div">;

export const Header: React.FC<HeaderProps> = ({
  style,
  className,
  ...props
}) => (
  <div
    className={`flex items-center p-2 w-full ${className || ""}`}
    {...props}
  />
);
