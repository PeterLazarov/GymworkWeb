import React from "react";
import { css } from "../../../styled-system/css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};
export const Button: React.FC<Props> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className={css({
      cursor: "pointer",
      padding: "2",
      borderRadius: "md",
      _hover: { bg: "gray.100" },
    })}
  >
    {children}
  </button>
);
