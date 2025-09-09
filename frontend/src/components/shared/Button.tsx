import React from "react";
import { css } from "../../../styled-system/css";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ disabled, ...props }) => (
  <button
    disabled={disabled}
    className={css({
      cursor: disabled ? "not-allowed" : "pointer",
      padding: "2",
      borderRadius: "md",
      opacity: disabled ? 0.5 : 1,
      _hover: { bg: disabled ? undefined : "gray.100" },
    })}
    {...props}
  />
);
