import { gql, useQuery } from "@apollo/client";
import React, { createContext, useContext, useEffect } from "react";

const SETTINGS_QUERY = gql`
  query ThemeSettings {
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
  const { data, loading } = useQuery(SETTINGS_QUERY, {
    errorPolicy: "ignore", // Don't crash if settings don't exist yet
  });

  const theme: Theme = data?.settings?.theme || "light";

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
