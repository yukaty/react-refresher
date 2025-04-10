
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export function Footer({ siteTitle, currentYear }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <footer className={theme === "dark" ? "dark" : "light"}>
      <p>&copy; {currentYear} {siteTitle}</p>
    </footer>
  );
}

