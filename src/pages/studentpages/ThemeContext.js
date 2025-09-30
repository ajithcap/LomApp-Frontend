import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // light | dark
  const [accent, setAccent] = useState("blue"); // blue | green | red
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Apply dark/light theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Update accent color CSS variable
    let accentColor;
    switch (accent) {
      case "red": accentColor = "#ef4444"; break;
      case "green": accentColor = "#22c55e"; break;
      case "blue":
      default: accentColor = "#3b82f6"; break;
    }
    document.documentElement.style.setProperty("--accent", accentColor);

    // Optional: store in localStorage
    localStorage.setItem("theme", theme);
    localStorage.setItem("accent", accent);
    localStorage.setItem("language", language);
  }, [theme, accent, language]);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      accent,
      setAccent,
      language,
      setLanguage
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
