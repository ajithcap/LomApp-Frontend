// src/pages/Profile.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

function Profile() {
  const { darkMode, setDarkMode, accentColor, setAccentColor, language, setLanguage, translations } = useTheme();

  const accentClasses = {
    green: "bg-[var(--accent)]",
    blue: "bg-[var(--accent)]",
    red: "bg-[var(--accent)]",
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex items-center gap-4 m-6">
        <img
          src="/pictures/person.png"
          alt="Profile"
          className={`w-20 h-20 rounded-full border-4 border-[var(--accent)]`}
        />
        <div>
          <h2 className="text-xl font-semibold">{translations[language].student}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">ajithkumar@example.com</p>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="m-6 flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 className="text-lg font-semibold">{translations[language].welcome}</h3>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-lg ${darkMode ? "bg-yellow-500 text-black" : "bg-gray-900 text-white"}`}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      {/* Accent Color Picker */}
      <div className="m-6 p-4 bg-white dark:bg-gray-800 rounded shadow">
        <h3 className="font-semibold mb-2">Choose Accent Color</h3>
        <div className="flex gap-4">
          <button onClick={() => setAccentColor("green")} className="w-8 h-8 rounded-full bg-green-600" />
          <button onClick={() => setAccentColor("blue")} className="w-8 h-8 rounded-full bg-blue-600" />
          <button onClick={() => setAccentColor("red")} className="w-8 h-8 rounded-full bg-red-600" />
        </div>
      </div>

      {/* Language Selector */}
      <div className="m-6 p-4 bg-white dark:bg-gray-800 rounded shadow">
        <h3 className="font-semibold mb-2">{translations[language].language}</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border rounded px-4 py-2 dark:bg-gray-700 dark:text-white"
        >
          <option value="en">English</option>
          <option value="ta">தமிழ்</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>

      {/* Actions */}
      <div className="flex gap-4 p-6">
        <button className={`px-4 py-2 rounded-lg text-white ${accentClasses[accentColor]}`}>
          {translations[language].changePassword}
        </button>
        <button className="px-4 py-2 rounded-lg bg-red-600 text-white">
          {translations[language].logout}
        </button>
      </div>
    </div>
  );
}

export default Profile;
