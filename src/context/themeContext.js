import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: {
    title: "BrandA",
    fontFamily: "Arial",
    backgroundColor: "blue",
  },
  onThemeChange: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    title: "BrandA",
    fontFamily: "Arial",
    backgroundColor: "blue",
  });

  const themeChangeHandler = (title, fontFamily, backgroundColor) => {
    setTheme({
      title: title,
      fontFamily: fontFamily,
      backgroundColor: backgroundColor,
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
