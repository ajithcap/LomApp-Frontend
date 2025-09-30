// src/context/ThemeContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState("green");
  const [language, setLanguage] = useState("en");

  const translations = {
    en: { dashboard: "Dashboard", courses: "Courses", profile: "Profile", about: "About Us", logout: "Logout", welcome: "Welcome to your profile", student: "Student | Chennai", changePassword: "Change Password" },
    ta: { dashboard: "டாஷ்போர்டு", courses: "பாடங்கள்", profile: "சுயவிவரம்", about: "எங்களை பற்றி", logout: "வெளியேறு", welcome: "உங்கள் சுயவிவரத்திற்கு வரவேற்கிறோம்", student: "மாணவர் | சென்னை", changePassword: "கடவுச்சொல்லை மாற்றவும்" },
    hi: { dashboard: "डैशबोर्ड", courses: "पाठ्यक्रम", profile: "प्रोफ़ाइल", about: "हमारे बारे में", logout: "लॉग आउट", welcome: "आपकी प्रोफ़ाइल में स्वागत है", student: "छात्र | चेन्नई", changePassword: "पासवर्ड बदलें" },
  };

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    let color = "#22c55e"; // green
    if (accentColor === "blue") color = "#3b82f6";
    else if (accentColor === "red") color = "#ef4444";
    document.documentElement.style.setProperty("--accent", color);
  }, [darkMode, accentColor]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, accentColor, setAccentColor, language, setLanguage, translations }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
