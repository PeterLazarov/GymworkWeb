import React, { ReactNode } from "react";
import { css } from "../../styled-system/css";
import { flex, vstack } from "../../styled-system/patterns";

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    // Using flex pattern for the main container
    <div className={flex({ direction: "column", minH: "100vh" })}>
      {/* Using css function for custom styles */}
      <header
        className={css({
          bg: "gray.800",
          color: "white",
          p: "4",
          borderBottom: "1px solid token(colors.gray.700)",
        })}
      >
        <h1 className={css({ fontSize: "xl", fontWeight: "bold" })}>
          GymworkWeb
        </h1>
      </header>

      {/* Using vstack pattern for main content */}
      <main
        className={vstack({
          flex: "1",
          p: "4",
          gap: "4",
          alignItems: "stretch",
        })}
      >
        {children}
      </main>

      <footer
        className={css({
          bg: "gray.800",
          color: "gray.300",
          p: "4",
          textAlign: "center",
        })}
      >
        © {new Date().getFullYear()} GymworkWeb
      </footer>
    </div>
  );
}
