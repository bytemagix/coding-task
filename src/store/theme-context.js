import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: {
    title: "BrandA",
    fontFamily: "Arial",
  },
  onThemeChange: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    title: "BrandA",
    fontFamily: "Arial",
  });

  const themeChangeHandler = (title, fontFamily) => {
    setTheme({
      title: title,
      fontFamily: fontFamily,
    });
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
