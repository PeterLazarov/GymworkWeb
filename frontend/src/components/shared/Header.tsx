import React, { ComponentPropsWithoutRef } from "react";
import { flex } from "../../../styled-system/patterns";
import { spacing } from "./spacing";

type HeaderProps = ComponentPropsWithoutRef<"div">;

export const Header: React.FC<HeaderProps> = ({
  style,
  className,
  ...props
}) => (
  <div
    className={[
      flex({
        alignItems: "center",
        padding: spacing.sm,
        width: "100%",
      }),
      className || "",
    ].join(" ")}
    {...props}
  />
);
