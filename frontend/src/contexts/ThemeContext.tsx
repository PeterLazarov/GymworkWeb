import { gql, TypedDocumentNode, useQuery } from "@apollo/client";
import React, { createContext, useContext, useEffect } from "react";
import { ISettingsQuery, ISettingsQueryVariables } from "../generated/graphql";

const SETTINGS_QUERY: TypedDocumentNode<
  ISettingsQuery,
  ISettingsQueryVariables
> = gql`
  query Settings {
    settings {
      id
      theme
    }
  }
`;

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { data, loading } = useQuery(SETTINGS_QUERY, { errorPolicy: "ignore" });

  const theme: Theme = (data?.settings?.theme as Theme) || "light";

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.add(theme);
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    isLoading: loading,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
