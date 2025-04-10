import { createContext, useState } from "react";

// create a context for theme management
export const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  // state to manage the current theme
  const [theme, setTheme] = useState("light");

  // function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // return the context provider with the current theme and toggle function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

