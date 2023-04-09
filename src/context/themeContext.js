import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "BrandA",
  onThemeChange: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("BrandA");

  const themeChangeHandler = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        onThemeChange: themeChangeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
